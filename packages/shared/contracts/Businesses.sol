// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import interfaces
import "./IAttendanceToken.sol";
import "./IAttendees.sol";

// Contract: Businesses
// Description: This contract manages businesses, their coupons, and interactions with attendance tokens and attendees.
// Programmer: Cameron Denton
// Created: 9/23/19
// Revised: 10/3/23
// - 10/3/23: Added the buy coupons function as well as the burn coupon function, added logs to be emmited, refactor code and added new mappings. 
// - [Brief Description of Revision 2 & Author]
contract Businesses {
    // State variables
    address public owner; // Stores the owner's Ethereum address
    IAttendanceToken attendanceTokenContract; // Stores the address of the Attendance Token contract
    IAttendees attendeesContract; // Stores the address of the Attendees contract
    string[] public BusinessesList; // Stores list of Businesses Enrolled

    // Define an event for business enrollment
    event BusinessEnrolled(string businessName, uint256 businessID);

    // Define an event for coupon creation
    event CouponCreated(uint256 couponID, uint256 businessID);

    // Define an event for coupon redemption
    event CouponRedeemed(uint256 couponID, address redeemer);

    // Define an event for coupon purchase
    event CouponPurchased(uint256 couponID, address buyer);

    // Constructor: Businesses
    // Description: Initializes the contract, sets the owner to the sender's address, and initializes contract addresses.
    // Parameters:
    // - _addressToken: The address of the Attendance Token contract
    // - _addressAttendee: The address of the Attendees contract
    constructor(address _addressToken, address _addressAttendee) {
        owner = msg.sender; // Sets the contract creator as the owner
        attendanceTokenContract = IAttendanceToken(_addressToken); // Creates a callable contract instance for Attendance Token
        attendeesContract = IAttendees(_addressAttendee); // Creates a callable contract instance for Attendees
    }

    // Modifier: onlyOwner
    // Description: Ensures that only the owner can execute a function.
    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner of this contract"); // Requires the caller to be the owner
        _; // Continue execution
    }

    // Struct: Coupon
    // Description: Represents a coupon with various attributes.
    struct Coupon {
        uint256 couponID;
        uint256 price;
        uint256 supplyLeft;
        string description;
        mapping(uint256 => bool) organizationBanList;
    }

    // State variable to keep track of coupon IDs
    uint256 public idCounter = 0;

    // State variable to assign coupon ids too
    uint256 couponIDCounter = 0;

    // Mapping: businessToID
    // Description: Maps business names to unique IDs.
    mapping(string => uint256) public businessToID;

    // Mapping: businessToCouponIDs
    // Description: Maps business IDs to arrays of coupon IDs associated with the business.
    mapping(uint256 => uint256[]) public businessToCouponIDs;

    // Mapping: attendeeToCouponIDs
    // Description: Maps attendee addresses to arrays of coupon IDs associated with the attendee.
    mapping(address => uint256[]) public attendeeToCouponIDs;

    // Mapping: couponIDToCoupon
    // Description: Maps coupon IDs to Coupon structs.
    mapping(uint256 => Coupon) public couponIDToCoupon;

    // Mapping: businessIDtoOwner
    //Description: maps to the owner of a business ID
    mapping(uint256=>address) businessIdToOwner;

    // Function: enrollBusiness
    // Description: Enrolls a new business and assigns it a unique ID.
    // Parameters:
    // - _businessName: The name of the business
    // Preconditions: None
    // Acceptable Input Values: Non-empty string for _businessName
    // Unacceptable Input Values: None
    // Postconditions: The business is enrolled and assigned an ID.
    // Return: True if the operation is successful
    function enrollBusiness(string memory _businessName) public returns (uint256) {
        businessToID[_businessName] = idCounter; // Sets the ID for the business
        businessIdToOwner[idCounter] = msg.sender; // Maps business ID to the owner's address
        BusinessesList.push(_businessName); //adds to lists of businesses
        idCounter++; // Increments the counter for the next business
        emit BusinessEnrolled(_businessName, businessToID[_businessName]); // Emit the BusinessEnrolled event
        return businessToID[_businessName]; // Return the business ID
    }

    // Function: createCoupon
    // Description: Creates a new coupon for a business.
    // Parameters:
    // - _businessName: The name of the business
    // - _price: The price of the coupon
    // - _supply: The supply of coupons
    // - _banList: An array of organization IDs to ban from using the coupon
    // - _couponID: The unique ID of the coupon
    // Preconditions: None
    // Acceptable Input Values: Non-empty string for _businessName, non-negative _price and _supply, valid array of _banList, unique _couponID
    // Unacceptable Input Values: None
    // Postconditions: A new coupon is created and associated with the business.
    // Return: True if the operation is successful
    function createCoupon(string memory _businessName, uint256 _price, uint256 _supply, string memory _description, uint256[] memory _banList) public returns (uint256) {
        uint256 businessID = businessToID[_businessName]; // Gets the business ID
        require(businessIdToOwner[businessID] == msg.sender, "You are not the owner of the business");
        Coupon storage coupon = couponIDToCoupon[couponIDCounter]; // Gets a reference to the coupon
        coupon.couponID = couponIDCounter; // Sets the coupon ID
        coupon.price = _price; // Sets the coupon price
        coupon.supplyLeft = _supply; // Sets the coupon supply
        coupon.description = _description; // Sets the coupon description
        for (uint i = 0; i < _banList.length; i++) {
            coupon.organizationBanList[_banList[i]] = true; // Sets organizations to ban
        }
        uint256[] storage couponArray = businessToCouponIDs[businessID]; // Gets the array of coupon IDs for the business
        couponArray.push(couponIDCounter); // Adds the new coupon ID to the business's coupons
        couponIDCounter++; // Increments the coupon ID counter
        emit CouponCreated(coupon.couponID, businessID); // Emit the CouponCreated event
        return coupon.couponID; // Return the coupon ID
    }

    // Function: changeAttendeeContract
    // Description: Changes the address of the Attendees contract.
    // Parameters:
    // - _newaddress: The address of the new Attendees contract
    // Preconditions: None
    // Acceptable Input Values: Valid Ethereum address for _newaddress
    // Unacceptable Input Values: None
    // Postconditions: The Attendees contract address is updated.
    // Return: True if the operation is successful
    function changeAttendeeContract(address _newaddress) public onlyOwner returns (bool) {
        IAttendees newContract = IAttendees(_newaddress); // Creates a new contract instance
        attendeesContract = newContract; // Updates the Attendees contract address
        return true; // Returns true to indicate success
    }

    // Function: changeTokenContract
    // Description: Changes the address of the Attendance Token contract.
    // Parameters:
    // - _newaddress: The address of the new Attendance Token contract
    // Preconditions: None
    // Acceptable Input Values: Valid Ethereum address for _newaddress
    // Unacceptable Input Values: None
    // Postconditions: The Attendance Token contract address is updated.
    // Return: True if the operation is successful
    function changeTokenContract(address _newaddress) public onlyOwner returns (bool) {
        IAttendanceToken newContract = IAttendanceToken(_newaddress); // Creates a new contract instance
        attendanceTokenContract = newContract; // Updates the Attendance Token contract address
        return true; // Returns true to indicate success
    }

    function getBusinessCoupons(string memory _businessname) public view returns (uint[] memory) {
        uint256 id = businessToID[_businessname]; // Gets the business ID
        return businessToCouponIDs[id]; // Returns an array of coupon IDs associated with the business
    }

    

    // Function: buyCoupon
    // User buys a coupon with token
    // Parameters:
    // - _couponID: coupon id of the coupon wanting to buy
    // Preconditions: None
    // Acceptable Input Values: Valid uint256 value
    // Unacceptable Input Values: None
    // Postconditions: user gets the coupon
    // Return: True if the operation is successful
    function buyCoupon(uint256 _couponID) public returns (bool) {
        Coupon storage coupon = couponIDToCoupon[_couponID]; // Gets the coupon
        uint256 price = coupon.price; // Gets the coupon price
        (,,uint256 organizationID) = attendeesContract.getAddressToAttendee(msg.sender); // Gets the organization ID of the caller
        bool banned = coupon.organizationBanList[organizationID]; // Checks if the caller's organization is banned
        require(!banned, "You are part of a banned organization"); // Requires that the caller's organization is not banned
        require(attendanceTokenContract.balanceOf(msg.sender) >= price); // Requires that the caller has enough tokens to buy the coupon
        require(coupon.supplyLeft > 0, "There are no coupons left"); // Requires that there are coupons left in supply
        attendanceTokenContract.transferFrom(msg.sender, address(this), price); // Transfers tokens from the caller to the contract
        coupon.supplyLeft--; // Decrements the coupon supply
        uint256[] storage usersCoupons = attendeeToCouponIDs[msg.sender]; // Gets the caller's coupon IDs
        usersCoupons.push(_couponID); // Adds the purchased coupon to the caller's coupons
        emit CouponPurchased(_couponID, msg.sender); // Emit the CouponPurchased event
        return true; // Returns true to indicate success
    }

    // Function: buyCoupon
    // User buys a coupon with token
    // Parameters:
    // - _couponID: coupon id of the coupon wanting to buy
    // Preconditions: None
    // Acceptable Input Values: Valid uint256 value
    // Unacceptable Input Values: None
    // Postconditions: user gets the coupon
    // Return: True if the operation is successful
    function redeemCoupon(uint256 _couponID) public returns (bool) {
        uint256[] storage usersCoupons = attendeeToCouponIDs[msg.sender]; // Gets the caller's coupon IDs
        for (uint256 i = 0; i < usersCoupons.length; i++) {
            if (usersCoupons[i] == _couponID) {
                // Swap the item to delete with the last item in the array
                usersCoupons[i] = usersCoupons[usersCoupons.length - 1];
                // Reduce the array's length by one
                usersCoupons.pop();
                emit CouponRedeemed(_couponID, msg.sender); // Emit the CouponRedeemed event
                return true; // Coupon successfully redeemed and removed
            }
        }
        require(false, "You do not own the coupon you are trying to redeem"); // Requires that the caller owns the coupon
        return false; // Returns false to indicate failure
    }
}
