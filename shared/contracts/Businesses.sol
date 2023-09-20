// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import interfaces
import "./IAttendanceToken.sol";
import "./IAttendees.sol";

// Contract: Businesses
// Description: This contract manages businesses, their coupons, and interactions with attendance tokens and attendees.
// Programmer: Cameron Denton
// Created: 9/23/19
// Revised: [Dates of Revisions]
// - [Brief Description of Revision 1 & Author]
// - [Brief Description of Revision 2 & Author]
contract Businesses {
    // State variables
    address public owner;
    IAttendanceToken attendanceTokenContract;
    IAttendees attendeesContract;

    // Constructor: Businesses
    // Description: Initializes the contract, sets the owner to the sender's address, and initializes contract addresses.
    // Parameters:
    // - _addressToken: The address of the Attendance Token contract
    // - _addressAttendee: The address of the Attendees contract
    constructor(address _addressToken, address _addressAttendee) {
        owner = msg.sender;
        attendanceTokenContract = IAttendanceToken(_addressToken); //creates contract callable
        attendeesContract = IAttendees(_addressAttendee); //creates contract callable
    }

    // Modifier: onlyOwner
    // Description: Ensures that only the owner can execute a function.
    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner of this contract"); //requires caller is owner
        _;
    }

    // Struct: Coupon
    // Description: Represents a coupon with various attributes.
    struct Coupon {
        uint256 couponID;
        uint256 price;
        uint256 supplyLeft;
        mapping(uint256 => bool) organizationBanList;
    }

    // State variable to keep track of coupon IDs
    uint256 public idCounter = 0;

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

    // Function: enrollBusiness
    // Description: Enrolls a new business and assigns it a unique ID.
    // Parameters:
    // - _businessName: The name of the business
    // Preconditions: None
    // Acceptable Input Values: Non-empty string for _businessName
    // Unacceptable Input Values: None
    // Postconditions: The business is enrolled and assigned an ID.
    // Return: True if the operation is successful
    function enrollBusiness(string memory _businessName) public returns (bool) {
        businessToID[_businessName] = idCounter; //sets id
        idCounter++; //increments counter
        return true; //returns true
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
    function createCoupon(string memory _businessName, uint256 _price, uint256 _supply, uint256[] memory _banList, uint256 _couponID) public returns (bool) {
        uint256 businessID = businessToID[_businessName]; //get id
        Coupon storage coupon = couponIDToCoupon[_couponID]; //get coupons
        coupon.couponID = _couponID; //set value
        coupon.price = _price; //set value
        coupon.supplyLeft = _supply; //set value
        for (uint i = 0; i < _banList.length; i++) {
            coupon.organizationBanList[_banList[i]] = true; //set all banned organizations
        }
        uint256[] storage couponArray = businessToCouponIDs[businessID]; //gets array
        couponArray.push(_couponID); //pushes new coupons
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
        IAttendees newContract = IAttendees(_newaddress); //changes pointer to contract
        attendeesContract = newContract; //sets contract
        return true; //returns true
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
        IAttendanceToken newContract = IAttendanceToken(_newaddress); //sets new pointer
        attendanceTokenContract = newContract; //sets contract variable
        return true; //returns true
    }

    // Function: redeemCoupon
    // Description: [Add a description of the redeemCoupon function here]
    // (You can add this part of the code as needed)
}
