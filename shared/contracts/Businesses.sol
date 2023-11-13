// SPDX-License-Identifier: MIT
// Specifies the Solidity compiler version to be used (greater than or equal to 0.8.0)
pragma solidity ^0.8.0;

// Import interfaces
import "./IAttendanceToken.sol"; // Import the IAttendanceToken interface
import "./IAttendees.sol"; // Import the IAttendees interface

// Define a contract named "Businesses"
contract Businesses {
    // State variables
    address public owner; // Stores the owner's Ethereum address
    IAttendanceToken attendanceTokenContract; // Stores the address of the Attendance Token contract
    IAttendees attendeesContract; // Stores the address of the Attendees contract
    string[] public BusinessesList; // Stores list of Businesses Enrolled

    // Define an event for business enrollment
    event BusinessEnrolled(string businessName, uint256 businessID, uint256 time);

    // Define an event for coupon creation
    event CouponCreated(uint256 couponID,uint256 supply, string description, uint256 businessID, string businessName, uint256 time);

    // Define an event for coupon redemption
    event CouponRedeemed(uint256 couponID, address redeemer, uint256 time);

    // Define an event for coupon purchase
    event CouponPurchased(uint256 couponID, address buyer, uint256 time);

    // Constructor function with parameters to initialize contract state
    constructor(address _addressToken, address _addressAttendee) {
        owner = msg.sender; // Sets the contract creator as the owner
        attendanceTokenContract = IAttendanceToken(_addressToken); // Creates a callable contract instance for Attendance Token
        attendeesContract = IAttendees(_addressAttendee); // Creates a callable contract instance for Attendees
    }

    // Modifier to restrict certain functions to be callable only by the owner
    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner of this contract"); // Requires the caller to be the owner
        _; // Continue execution
    }

    // Struct to represent a coupon
    struct Coupon {
        uint256 couponID;
        uint256 price;
        uint256 supplyLeft;
        mapping(uint256 => bool) organizationBanList;
    }

    // Counter to keep track of business ID
    uint256 public idCounter = 1;

    // Counter to keep track of coupon IDs
    uint256 couponIDCounter = 1;

    // Mapping of business name to business ID
    mapping(string => uint256) private businessToID;

    // Mapping of business ID to coupon IDs
    mapping(uint256 => uint256[]) private businessToCouponIDs;

    // Mapping of attendee address to coupon IDs
    mapping(address => uint256[]) private attendeeToCouponIDs;

    // Mapping of coupon ID to coupon struct
    mapping(uint256 => Coupon) private couponIDToCoupon;

    // Function to enroll a business
    function enrollBusiness(string memory _businessName) onlyOwner public returns (uint256) {
        require(businessToID[_businessName] == 0, "This business has already been enrolled");
        businessToID[_businessName] = idCounter; // Sets the ID for the business
        BusinessesList.push(_businessName); // Adds to the list of businesses
        idCounter++; // Increments the counter for the next business
        emit BusinessEnrolled(_businessName, businessToID[_businessName], block.timestamp); // Emit the BusinessEnrolled event
        return businessToID[_businessName]; // Return the business ID
    }

    // Function to create a coupon
    function createCoupon(string memory _businessName, uint256 _price, uint256 _supply, string memory _description, string[] memory _banList) onlyOwner public returns (uint256) {
        uint256 businessID = businessToID[_businessName]; // Gets the business ID
        require(businessID != 0, "This business has not been registered");
        Coupon storage coupon = couponIDToCoupon[couponIDCounter]; // Gets a reference to the coupon
        coupon.couponID = couponIDCounter; // Sets the coupon ID
        coupon.price = _price; // Sets the coupon price
        coupon.supplyLeft = _supply; // Sets the coupon supply
        for (uint i = 0; i < _banList.length; i++) {
            uint256 BusinessId = attendeesContract.getOrganizationToId(_banList[i]);
            coupon.organizationBanList[BusinessId] = true; // Sets organizations to ban
        }
        uint256[] storage couponArray = businessToCouponIDs[businessID]; // Gets the array of coupon IDs for the business
        couponArray.push(couponIDCounter); // Adds the new coupon ID to the business's coupons
        couponIDCounter++; // Increments the coupon ID counter
        emit CouponCreated(coupon.couponID, _supply, _description, businessID, _businessName, block.timestamp); // Emit the CouponCreated event
        return coupon.couponID; // Return the coupon ID
    }

    // Function to change the Attendee contract address
    function changeAttendeeContract(address _newaddress) public onlyOwner returns (bool) {
        IAttendees newContract = IAttendees(_newaddress); // Creates a new contract instance
        attendeesContract = newContract; // Updates the Attendees contract address
        return true; // Returns true to indicate success
    }

    // Function to change the Attendance Token contract address
    function changeTokenContract(address _newaddress) public onlyOwner returns (bool) {
        IAttendanceToken newContract = IAttendanceToken(_newaddress); // Creates a new contract instance
        attendanceTokenContract = newContract; // Updates the Attendance Token contract address
        return true; // Returns true to indicate success
    }

    // Function to get coupon IDs associated with a business
    function getBusinessCoupons(string memory _businessname) public view returns (uint[] memory) {
        uint256 id = businessToID[_businessname]; // Gets the business ID
        return businessToCouponIDs[id]; // Returns an array of coupon IDs associated with the business
    }

    // Function to get the list of enrolled businesses
    function getBusinessesList() public view returns (string[] memory) {
        return BusinessesList;
    }

    // Function to get the business ID by business name
    function getBusinessToID(string memory _businessName) public view returns (uint256) {
        return businessToID[_businessName];
    }

    // Function to get coupon IDs associated with a business by business ID
    function getBusinessToCouponIDs(uint256 _businessID) public view returns (uint256[] memory) {
        return businessToCouponIDs[_businessID];
    }

    // Function to get coupon IDs associated with an attendee by address
    function getAttendeeToCouponIDs(address _address) public view returns (uint256[] memory) {
        return attendeeToCouponIDs[_address];
    }

    // Function to get coupon details by coupon ID
    function getCouponIDToCoupon(uint256 _couponID) public view returns (uint256, uint256, uint256) {
        Coupon storage coupon = couponIDToCoupon[_couponID];
        return (coupon.couponID, coupon.price, coupon.supplyLeft);
    }

    // Function to buy a coupon
    function buyCoupon(uint256 _couponID) public returns (bool) {
        Coupon storage coupon = couponIDToCoupon[_couponID]; // Gets the coupon
        uint256 price = coupon.price; // Gets the coupon price
        uint256 organizationID = attendeesContract.getAddressToAttendee(msg.sender); // Gets the organization ID of the caller
        bool banned = coupon.organizationBanList[organizationID]; // Checks if the caller's organization is banned
        require(!banned, "You are part of a banned organization"); // Requires that the caller's organization is not banned
        require(attendanceTokenContract.balanceOf(msg.sender) >= price); // Requires that the caller has enough tokens to buy the coupon
        require(coupon.supplyLeft > 0, "There are no coupons left"); // Requires that there are coupons left in supply
        attendanceTokenContract.transferFrom(msg.sender, address(this), price); // Transfers tokens from the caller to the contract
        coupon.supplyLeft--; // Decrements the coupon supply
        uint256[] storage usersCoupons = attendeeToCouponIDs[msg.sender]; // Gets the caller's coupon IDs
        usersCoupons.push(_couponID); // Adds the purchased coupon to the caller's coupons
        emit CouponPurchased(_couponID, msg.sender, block.timestamp); // Emit the CouponPurchased event
        return true; // Returns true to indicate success
    }

    // Function to redeem a coupon
    function redeemCoupon(uint256 _couponID) public returns (bool) {
        uint256[] storage usersCoupons = attendeeToCouponIDs[msg.sender]; // Gets the caller's coupon IDs
        for (uint256 i = 0; i < usersCoupons.length; i++) {
            if (usersCoupons[i] == _couponID) {
                // Swap the item to delete with the last item in the array
                usersCoupons[i] = usersCoupons[usersCoupons.length - 1];
                // Reduce the array's length by one
                usersCoupons.pop();
                emit CouponRedeemed(_couponID, msg.sender, block.timestamp); // Emit the CouponRedeemed event
                return true; // Coupon successfully redeemed and removed
            }
        }
        require(false, "You do not own the coupon you are trying to redeem"); // Requires that the caller owns the coupon
        return false; // Returns false to indicate failure
    }

    // Function to get coupon details by coupon ID
    function getCouponDetails(uint256 _couponID) public view returns (uint256, uint256, uint256, string memory) {
        Coupon storage coupon = couponIDToCoupon[_couponID];
        return (coupon.couponID, coupon.price, coupon.supplyLeft, coupon.description);
    }
}
