// Author: Cameron Denton
// Created: 10/22/23
// Last Modified: 10/22/23

// Solidity version declaration
pragma solidity ^0.8.0;

//Importing required contracts
import "./IAttendees.sol";
import "./IAttendanceToken.sol";
import "./Businesses.sol";

// Declaration of the Wallet contract
contract Wallet {
    
    // Address of the wallet owner
    address public owner;
    
    // Contract instances for Attendees, AttendanceToken, and Businesses
    IAttendees attendeesContract;
    IAttendanceToken tokenContract;
    Businesses businessesContract;
    
    // Mapping to track approved signers
    mapping(address => bool) approvedSigners;
    

    // Struct to represent a coupon
    struct Coupon {
        uint256 couponID;
        uint256 price;
        uint256 supplyLeft;
        string description;
        mapping(uint256 => bool) organizationBanList;
    }

    /*
     * @dev Constructor to initialize the Wallet contract.
     * @param _owner The address of the wallet owner.
     * @param _attendees The address of the Attendees contract.
     * @param _token The address of the AttendanceToken contract.
     * @param _businesses The address of the Businesses contract.
     * @param _firstName The first name of the wallet owner.
     * @param _lastName The last name of the wallet owner.
     * @param _organization The organization associated with the wallet owner.
     */
    constructor(
        address _owner,
        string memory _id,
        address _attendees,
        address _token,
        address _businesses,
        string memory _organization
    ) {
        attendeesContract = IAttendees(_attendees);
        tokenContract = IAttendanceToken(_token);
        businessesContract = Businesses(_businesses);
        owner = _owner;
        approvedSigners[owner] = true;
        attendeesContract.createAttendee(msg.sender, _organization);
        // Additional functionality to enroll, etc.
    }

    // Modifier to restrict access to approved signers
    modifier approvedsigner() {
        require(approvedSigners[msg.sender], "You are not an approved caller");
        _;
    }

    /*
     * @dev Add a signer to the approved signers mapping.
     * @param _address The address of the signer to be added.
     * @return A boolean indicating the success of the operation.
     */
    function addSigner(address _address) public approvedsigner returns (bool) {
        approvedSigners[_address] = true;
        return true;
    }

    /**
     * @dev Remove a signer from the approved signers mapping.
     * @param _address The address of the signer to be removed.
     * @return A boolean indicating the success of the operation.
     */
    function removeSigner(address _address) public approvedsigner returns (bool) {
        approvedSigners[_address] = false;
        return true;
    }

    /*
     * @dev Buy a coupon with a given coupon ID.
     * @param _couponID The ID of the coupon to be purchased.
     * @return A boolean indicating the success of the purchase.
     */
    function buyCoupon(uint256 _couponID) public approvedsigner returns (bool) {
        (, uint256 price, , ) = businessesContract.getCouponDetails(_couponID); // Gets the coupon
        tokenContract.approve(address(businessesContract), price);
        businessesContract.buyCoupon(_couponID);
        return true;
    }

    // /**
    //  * @dev Redeem a coupon with a given coupon ID.
    //  * @param _couponID The ID of the coupon to be redeemed.
    //  * @return A boolean indicating the success of the redemption.
    //  */
    function redeemCoupon(uint256 _couponID) public approvedsigner returns (bool) {
        businessesContract.redeemCoupon(_couponID);
        return true;
    }
}
