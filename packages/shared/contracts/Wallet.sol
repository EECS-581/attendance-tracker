pragma solidity ^0.8.0;

import "./IAttendees.sol";
import "./IAttendanceToken.sol";
import "./Businesses.sol";

contract Wallet {
    address public owner;
    IAttendees attendeesContract;
    IAttendanceToken tokenContract;
    Businesses businessesContract;
    mapping(address=>bool) approvedSigners;

    struct Coupon {
        uint256 couponID;
        uint256 price;
        uint256 supplyLeft;
        string description;
        mapping(uint256 => bool) organizationBanList;
    }

    constructor(
        address _owner,
        address _attendees,
        address _token,
        address _businesses,
        string memory _firstName,
        string memory _lastName,
        string memory _organization
    ) {
        attendeesContract = IAttendees(_attendees);
        tokenContract = IAttendanceToken(_token);
        businessesContract = Businesses(_businesses);
        owner = _owner;
        approvedSigners[owner] = true;
        attendeesContract.createAttendee(msg.sender, _firstName, _lastName, _organization);
        //add functionality to enroll and what not
    }

    modifier approvedsigner(){
        require(approvedSigners[msg.sender], "You are not an approved caller");
        _;
    }

    function addSigner(address _address) public approvedsigner returns(bool){
        approvedSigners[_address] = true;
        return true;
    }

    function removeSigner(address _address) public approvedsigner returns(bool){
        approvedSigners[_address] = false;
        return true;
    }

    function buyCoupon(uint256 _couponID) public approvedsigner returns(bool){

        (, uint256 price, , ) = businessesContract.getCouponDetails(_couponID); // Gets the coupon

        tokenContract.approve(address(businessesContract), price);
        businessesContract.buyCoupon(_couponID);
        return true;    
    }


    function redeemCoupon(uint256 _couponID) public approvedsigner returns(bool){
        businessesContract.redeemCoupon(_couponID);
        return true;
    }

}
