// Author: Cameron Denton
// Created: 10/22/23
// Last Modified: 10/22/23

// Interface for all needed business functions for wallets to call
pragma solidity ^0.8.0;

interface IBusinesses {
    
    /**
     * @dev Buy a coupon with a given coupon ID.
     * @param _couponID The ID of the coupon to be purchased.
     * @return A boolean indicating the success of the purchase.
     */
    function buyCoupon(uint256 _couponID) external returns (bool);

    /**
     * @dev Redeem a coupon with a given coupon ID.
     * @param _couponID The ID of the coupon to be redeemed.
     * @return A boolean indicating the success of the redemption.
     */
    function redeemCoupon(uint256 _couponID) external returns (bool);

    /**
     * @dev Get details of a coupon with a given coupon ID.
     * @param _couponID The ID of the coupon.
     * @return A tuple containing coupon details (price, supplyLeft, description).
     */
    function getCouponDetails(uint256 _couponID) external view returns (uint256, uint256, uint256, string memory);
}
