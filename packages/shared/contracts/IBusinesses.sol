//interface for all needed business functions for wallets to call

pragma solidity ^0.8.0;

interface IBusinesses{

    function buyCoupon(uint256 _couponID) external returns (bool);

    function redeemCoupon(uint256 _couponID) external returns (bool);

    function getCouponDetails(uint256 _couponID) external view returns (uint256, uint256, uint256, string memory);

}