pragma solidity ^0.8.0;

import "./IAttendanceToken.sol";
import "./IAttendees.sol";

contract Businesses {

    address public owner;
    IAttendanceToken attendanceTokenContract; 
    IAttendees attendeesContract;

    constructor(address _addressToken, address _addressAttendee){
        owner = msg.sender;
        attendanceTokenContract = IAttendanceToken(_addressToken);
        attendeesContract = IAttendees(_addressAttendee);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner of this contract");
        _;
    }

    struct Coupon {
        uint256 couponID;
        uint256 price;
        uint256 supplyLeft;
        mapping(uint256=>bool) organizationBanList;
    }
    uint256 public idCounter = 0;
    mapping(string=>uint256) public businessToID;
    mapping(uint256=>uint256[]) public businessToCouponIDs; 
    mapping(address=>uint256[]) public attendeeToCouponIDs;
    mapping(uint256=>Coupon) public couponIDToCoupon;

    function enrollBusiness(string memory _businessName)public returns (bool){
        businessToID[_businessName] = idCounter;
        idCounter++;
        return true;
    }

    function createCoupon(string memory _businessName, uint256 _price, uint256 _supply, uint256[] memory _banList, uint256 _couponID)public returns (bool){
        uint256 businessID = businessToID[_businessName];
        Coupon storage coupon = couponIDToCoupon[_couponID];
        coupon.couponID = _couponID;
        coupon.price = _price;
        coupon.supplyLeft = _supply;
        for(uint i =0; i < _banList.length; i++){
            coupon.organizationBanList[_banList[i]] = true;
        }
        uint256[] storage couponArray = businessToCouponIDs[businessID];
        couponArray.push(_couponID);
    }

    function changeAttendeeContract(address _newaddress)public onlyOwner returns (bool){
        IAttendees newContract = IAttendees(_newaddress);
        attendeesContract = newContract;
        return (true);
    }

    function changeTokenContract(address _newaddress)public onlyOwner returns (bool){
        IAttendanceToken newContract = IAttendanceToken(_newaddress);
        attendanceTokenContract = newContract;
        return (true);
    }

    //function to add -> reedem Coupon


}