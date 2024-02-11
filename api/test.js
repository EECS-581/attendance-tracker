const client = require("./client");

// Generic async function to call any function from client.js
async function callClientFunction(functionName, ...args) {
  try {
    const result = await client[functionName](...args);
    console.log(result);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Test functions for various client.js methods

// Test mintToken function
async function testMintToken() {
  await callClientFunction('mintToken', '0xC75187DDB11c9cDAcc71b40d13e2A7fCd23FDF18', 100, 1, 1);
}

// Test createWallet function
async function testCreateWallet() {
  await callClientFunction('createWallet', 'auth01', 'userType01', 'organization01');
}

// Test createClass function
async function testCreateClass() {
  await callClientFunction('createClass', 'Math101', 'class01', 'Teacher01');
}

// Test createClassSession function
async function testCreateClassSession() {
  await callClientFunction('createClassSession', 'Math101', 'session01', 'Teacher01');
}

// Test enrollBusiness function
async function testEnrollBusiness() {
  await callClientFunction('enrollBusiness', 'BingBong');
}

// Test createCoupon function
async function testCreateCoupon() {
  await callClientFunction('createCoupon', 'BingBong', 50, 100, 'Discount Coupon', []);
}

// Test buyCoupon function
async function testBuyCoupon() {
  await callClientFunction('buyCoupon', '0x456', 'coupon01');
}

// Test redeemCoupon function
async function testRedeemCoupon() {
  await callClientFunction('redeemCoupon', '0x789', 'coupon01');
}

// Test addSigner function
async function testAddSigner() {
  await callClientFunction('addSigner', '0xABC', '0xDEF');
}

// Test removeSigner function
async function testRemoveSigner() {
  await callClientFunction('removeSigner', '0xABC', '0xDEF');
}

// Test businessCoupons function
async function testBusinessCoupons() {
  await callClientFunction('businessCoupons', 'BingBong');
}

// Test businessesList function
async function testBusinessesList() {
  await callClientFunction('businessesList');
}

// Test businessToID function
async function testBusinessToID() {
  await callClientFunction('businessToID', 'BingBong');
}

// Test businessToCouponIDs function
async function testBusinessToCouponIDs() {
  await callClientFunction('businessToCouponIDs', 4);
}

// Test attendeeToCouponIDs function
async function testAttendeeToCouponIDs() {
  await callClientFunction('attendeeToCouponIDs', '0xC75187DDB11c9cDAcc71b40d13e2A7fCd23FDF18');
}

// Test couponIDToCoupon function
async function testCouponIDToCoupon() {
  await callClientFunction('couponIDToCoupon', 1);
}

// Example usage: test a specific function
testCouponIDToCoupon();
