// client.js
const serverURL = 'http://18.222.95.223:3000';

const postRequest = async (endpoint, data) => {
  try {
    const response = await fetch(`${serverURL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    });
    return response.json();
  } catch (error) {
    console.error('Error:', error);
  }
};

const mintToken = async (address, amount, classSessionID, organizationID) => {
  return await postRequest('/mintToken', { address, amount, classSessionID, organizationID });
};

 const createWallet = async (authId, userType ,organization) => {
  return await postRequest('/createWallet', { authId, userType, organization });
};

 const createClass = async (className, classId, teacher) => {
  return await postRequest('/createClass', { className, classId, teacher });
};

 const createClassSession = async (className, sessionId, teacher) => {
  return await postRequest('/createClassSession', { className, sessionId, teacher });
};

 const enrollBusiness = async (businessName) => {
  return await postRequest('/enrollBusiness', { businessName });
};

 const createCoupon = async (businessName, price, supply, description, banlist) => {
  return await postRequest('/createCoupon', { businessName, price, supply, description, banlist });
};

 const buyCoupon = async (WalletAddress, couponId) => {
  return await postRequest('/buyCoupon', { WalletAddress, couponId });
};

 const redeemCoupon = async (WalletAddress, couponId) => {
  return await postRequest('/redeemCoupon', { WalletAddress, couponId });
};

 const addSigner = async (WalletAddress, address) => {
  return await postRequest('/addSigner', { WalletAddress, address });
};

 const removeSigner = async (WalletAddress, address) => {
  return await postRequest('/removeSigner', { WalletAddress, address });
};

 const businessCoupons = async (businessName) => {
  return await postRequest('/businessCoupons', { businessName });
};

 const businessesList = async () => {
  return await postRequest('/businessesList', {});
};

 const businessToID = async (businessName) => {
  return await postRequest('/businessToID', { businessName });
};

 const businessToCouponIDs = async (businessID) => {
  return await postRequest('/businessToCouponIDs', { businessID });
};

 const attendeeToCouponIDs = async (address) => {
  return await postRequest('/attendeeToCouponIDs', { address });
};

 const couponIDToCoupon = async (couponID) => {
  return await postRequest('/couponIDToCoupon', { couponID });
};

module.exports = {
  mintToken,
  createWallet,
  createClass,
  createClassSession,
  enrollBusiness,
  createCoupon,
  buyCoupon,
  redeemCoupon,
  addSigner,
  removeSigner,
  businessToCouponIDs,
  businessCoupons,
  businessesList,
  businessToID,
  attendeeToCouponIDs,
  couponIDToCoupon
};