// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import interfaces
import "./IAttendanceToken.sol";
import "./IAttendees.sol";


contract Businesses {
    // State variables
    address public owner; // Stores the owner's Ethereum address
    IAttendanceToken attendanceTokenContract; // Stores the address of the Attendance Token contract
    IAttendees attendeesContract; // Stores the address of the Attendees contract
    string[] public BusinessesList; // Stores list of Businesses Enrolled

    // Define an event for business enrollment
    event BusinessEnrolled(string businessName, uint256 businessID, uint256 time);

    // Define an event for coupon creation
    event CouponCreated(uint256 couponID, uint256 businessID, string businessName, uint256 time);

    // Define an event for coupon redemption
    event CouponRedeemed(uint256 couponID, address redeemer, uint256 time);

    // Define an event for coupon purchase
    event CouponPurchased(uint256 couponID, address buyer, uint256 time);

    constructor(address _addressToken, address _addressAttendee) {
        owner = msg.sender; // Sets the contract creator as the owner
        attendanceTokenContract = IAttendanceToken(_addressToken); // Creates a callable contract instance for Attendance Token
        attendeesContract = IAttendees(_addressAttendee); // Creates a callable contract instance for Attendees
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner of this contract"); // Requires the caller to be the owner
        _; // Continue execution
    }

    struct Coupon {
        uint256 couponID;
        uint256 price;
        uint256 supplyLeft;
        string description;
        mapping(uint256 => bool) organizationBanList;
    }

    uint256 public idCounter = 0;

    uint256 couponIDCounter = 0;

    mapping(string => uint256) public businessToID;

    mapping(uint256 => uint256[]) public businessToCouponIDs;

    mapping(address => uint256[]) public attendeeToCouponIDs;

    mapping(uint256 => Coupon) public couponIDToCoupon;

    function enrollBusiness(string memory _businessName) onlyOwner public returns (uint256) {
        businessToID[_businessName] = idCounter; // Sets the ID for the business
        BusinessesList.push(_businessName); //adds to lists of businesses
        idCounter++; // Increments the counter for the next business
        emit BusinessEnrolled(_businessName, businessToID[_businessName], block.timestamp); // Emit the BusinessEnrolled event
        return businessToID[_businessName]; // Return the business ID
    }

    function createCoupon(string memory _businessName, uint256 _price, uint256 _supply, string memory _description, string[] memory _banList) onlyOwner public returns (uint256) {
        uint256 businessID = businessToID[_businessName]; // Gets the business ID
        Coupon storage coupon = couponIDToCoupon[couponIDCounter]; // Gets a reference to the coupon
        coupon.couponID = couponIDCounter; // Sets the coupon ID
        coupon.price = _price; // Sets the coupon price
        coupon.supplyLeft = _supply; // Sets the coupon supply
        coupon.description = _description; // Sets the coupon description
        for (uint i = 0; i < _banList.length; i++) {
            uint256 BusinessId = attendeesContract.getOrganizationToId(_banList[i]);
            coupon.organizationBanList[BusinessId] = true; // Sets organizations to ban
        }
        uint256[] storage couponArray = businessToCouponIDs[businessID]; // Gets the array of coupon IDs for the business
        couponArray.push(couponIDCounter); // Adds the new coupon ID to the business's coupons
        couponIDCounter++; // Increments the coupon ID counter
        emit CouponCreated(coupon.couponID, businessID, _businessName, block.timestamp); // Emit the CouponCreated event
        return coupon.couponID; // Return the coupon ID
    }

    function changeAttendeeContract(address _newaddress) public onlyOwner returns (bool) {
        IAttendees newContract = IAttendees(_newaddress); // Creates a new contract instance
        attendeesContract = newContract; // Updates the Attendees contract address
        return true; // Returns true to indicate success
    }

    function changeTokenContract(address _newaddress) public onlyOwner returns (bool) {
        IAttendanceToken newContract = IAttendanceToken(_newaddress); // Creates a new contract instance
        attendanceTokenContract = newContract; // Updates the Attendance Token contract address
        return true; // Returns true to indicate success
    }

    function getBusinessCoupons(string memory _businessname) public view returns (uint[] memory) {
        uint256 id = businessToID[_businessname]; // Gets the business ID
        return businessToCouponIDs[id]; // Returns an array of coupon IDs associated with the business
    }

    function buyCoupon(uint256 _couponID) public returns (bool) {
        Coupon storage coupon = couponIDToCoupon[_couponID]; // Gets the coupon
        uint256 price = coupon.price; // Gets the coupon price
        (,,uint256 organizationID) = attendeesContract.getAddressToAttendee(msg.sender); // Gets the organization ID of the caller
        bool banned = coupon.organizationBanList[organizationID]; // Checks if the caller's organization is banned
        require(!banned, "You are part of a banned organization"); // Requires that the caller's organization is not banned
        require(attendanceTokenContract.balanceOf(msg.sender) >= price); // Requires that the caller has enough tokens to buy the coupon
        require(coupon.supplyLeft > 0, "There are no coupons left"); // Requires that there are coupons left in supply
        attendanceTokenContract.transferFrom(msg.sender, address(0), price); // Transfers tokens from the caller to the contract
        coupon.supplyLeft--; // Decrements the coupon supply
        uint256[] storage usersCoupons = attendeeToCouponIDs[msg.sender]; // Gets the caller's coupon IDs
        usersCoupons.push(_couponID); // Adds the purchased coupon to the caller's coupons
        emit CouponPurchased(_couponID, msg.sender, block.timestamp); // Emit the CouponPurchased event
        return true; // Returns true to indicate success
    }

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
}
