const express = require('express');
const { ethers } = require('ethers');
require('dotenv').config();
const AttendanceTokenABI = require('../shared/abi/AttendanceToken.json'); // Importing ABI of AttendanceToken contract
const ClassesABI = require('../shared/abi/Classes.json'); // Importing ABI of Classes contract
const WalletFactoryABI = require('../shared/abi/WalletFactory.json'); // Importing ABI of WalletFactory contract
const WalletABI = require('../shared/abi/Wallet.json');
const BusinessABI = require('../shared/abi/Businesses.json')

const app = express();

app.use(express.json())

const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_INFURA_URL)

const signer1 = new ethers.Wallet(process.env.PRIVATE_KEY1, provider);
const signer2 = new ethers.Wallet(process.env.PRIVATE_KEY2, provider);
const signer3 = new ethers.Wallet(process.env.PRIVATE_KEY3, provider);

const ClassesContractAddress = process.env.CLASSES_CONTRACT_ADDRESS
const AttendanceTokenContractAddress = process.env.ATTENDANCE_TOKEN_CONTRACT_ADDRESS
const BusinessesContractAddress = process.env.BUSINESSES_CONTRACT_ADDRESS
const WalletFactoryContractAddress = process.env.WALLET_FACTORY_CONTRACT_ADDRESS
const AttendeesContractAddress = process.env.ATTENDEES_CONTRACT_ADDRESS

const BusinessesContract = new ethers.Contract(BusinessesContractAddress, BusinessABI, signer)

const signers = [signer1, signer2, signer3];
let index = 0;
const getSigner = () => {
    let new_index = index % signers.length
    index ++;
    return signers[new_index];
}


const createInstance = (ContractAddress, ABI) => {
    let _signer = getSigner();
    const ContractInstance = new ethers.Contract(ContractAddress, ABI, _signer);
    return ContractInstance
  }


app.post('/mintToken', async (req, res) => {
    try {
        // Example function to send data
        const address = req.body.data.address
        const amount = req.body.data.amount
        const classSessionID = req.body.data.classSessionID
        const organizationID = req.body.data.organizationID
        const AttendanceTokenContract = createInstance(AttendanceTokenContractAddress, AttendanceTokenABI);
        const tx = await AttendanceTokenContract.mint(address, amount, classSessionID, organizationID);
        await tx.wait();

        res.send({ message: 'Data sent successfully', txHash: tx.hash });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.post('/createWallet', async (req, res) => {
    try {
        // Example function to send data
        const authId = req.body.data.address
        const userType = req.body.data.userType
        const WalletFactoryContract = createInstance(WalletFactoryContractAddress, WalletFactoryABI);
        const tx = await WalletFactoryContract.createWallet("0x06e6620C67255d308A466293070206176288A67B",authId, userType, AttendeesContractAddress, AttendanceTokenContractAddress, BusinessesContractAddress, "ku");
        await tx.wait();

        res.send({ message: 'Data sent successfully', txHash: tx.hash });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.post('/createClass', async (req, res) => {
    try {
        // Example function to send data
        const className = req.body.data.className
        const classId = req.body.data.classId
        const teacher = req.body.data.teacher
        const ClassesContract = createInstance(ClassesContractAddress, ClassesABI);
        const tx = await ClassesContract.enrollClass(className, classId, teacher); // Minting tokens.
        await tx.wait();

        res.send({ message: 'Data sent successfully', txHash: tx.hash });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.post('/createClassSession', async (req, res) => {
    try {
        // Example function to send data
        const className = req.body.data.className;
        const sessionId = req.body.data.sessionId;
        const teacher = req.body.data.teacher;
        const ClassesContract = createInstance(ClassesContractAddress, ClassesABI);
        const tx = await ClassesContract.enrollClassSession(className, sessionId, teacher); // Minting tokens.
        await tx.wait();

        res.send({ message: 'Data sent successfully', txHash: tx.hash });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.post('/enrollBusiness', async (req, res) => {
    try {
        // Example function to send data
        const businessName = req.body.data.businessName
        const BusinessesContract = createInstance(BusinessesContractAddress, BusinessABI)
        const tx = await BusinessesContract.enrollBusiness(businessName)
        await tx.wait();

        res.send({ message: 'Data sent successfully', txHash: tx.hash });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.post('/createCoupon', async (req, res) => {
    try {
        // Example function to send data
        const businessName = req.body.data.businessName
        const price = req.body.data.price
        const supply = req.body.data.supply
        const description = req.body.data.description
        const banlist = req.body.data.banlist
        const BusinessesContract = createInstance(BusinessesContractAddress, BusinessABI)
        const tx = await BusinessesContract.createCoupon(businessName, price, supply, description, banlist);
        await tx.wait();

        res.send({ message: 'Data sent successfully', txHash: tx.hash });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.post('/buyCoupon', async (req, res) => {
    try {
        // Example function to send data
        const WalletAddress = req.body.data.WalletAddress
        const couponId = req.body.data.couponId
        const WalletInstance = createInstance(WalletAddress, WalletABI)
        const tx = await WalletInstance.buyCoupon(couponId);
        await tx.wait();

        res.send({ message: 'Data sent successfully', txHash: tx.hash });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.post('/redeemCoupon', async (req, res) => {
    try {
        // Example function to send data
        const WalletAddress = req.body.data.WalletAddress
        const couponId = req.body.data.couponId
        const WalletInstance = createInstance(WalletAddress, WalletABI)
        const tx = await WalletInstance.redeemCoupon(couponId);
        await tx.wait();

        res.send({ message: 'Data sent successfully', txHash: tx.hash });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.post('/addSigner', async (req, res) => {
    try {
        // Example function to send data
        const WalletAddress = req.body.data.WalletAddress
        const address = req.body.data.address
        const WalletInstance = createInstance(WalletAddress, WalletABI)
        const tx = await WalletInstance.addSigner(address);
        await tx.wait();

        res.send({ message: 'Data sent successfully', txHash: tx.hash });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.post('/removeSigner', async (req, res) => {
    try {
        // Example function to send data
        const WalletAddress = req.body.data.WalletAddress
        const address = req.body.data.address
        const WalletInstance = createInstance(WalletAddress, WalletABI)
        const tx = await WalletInstance.removeSigner(address);
        await tx.wait();

        res.send({ message: 'Data sent successfully', txHash: tx.hash });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.post('/businessCoupons', async (req, res) => {
    try {
        const businessName = req.body.data.businessName;
        const BusinessesContract = createInstance(BusinessesContractAddress, BusinessABI)
        const couponIDs = await BusinessesContract.getBusinessCoupons(businessName);
        res.json({ couponIDs: couponIDs });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Businesses List
app.post('/businessesList', async (req, res) => {
    try {
        const BusinessesContract = createInstance(BusinessesContractAddress, BusinessABI)
        const businessesList = await BusinessesContract.getBusinessesList();
        res.json({ businessesList: businessesList });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Business to ID
app.post('/businessToID', async (req, res) => {
    try {
        const businessName = req.body.data.businessName;
        const BusinessesContract = createInstance(BusinessesContractAddress, BusinessABI)
        const businessID = await BusinessesContract.getBusinessToID(businessName);
        res.json({ businessID: businessID });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Business to Coupon IDs
app.post('/businessToCouponIDs', async (req, res) => {
    try {
        const businessID = req.body.data.businessID;
        const BusinessesContract = createInstance(BusinessesContractAddress, BusinessABI)
        const couponIDs = await BusinessesContract.getBusinessToCouponIDs(businessID);
        res.json({ couponIDs: couponIDs });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Attendee to Coupon IDs
app.post('/attendeeToCouponIDs', async (req, res) => {
    try {
        const address = req.body.data.address;
        const BusinessesContract = createInstance(BusinessesContractAddress, BusinessABI)
        const couponIDs = await BusinessesContract.getAttendeeToCouponIDs(address);
        res.json({ couponIDs: couponIDs });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Coupon ID to Coupon
app.post('/couponIDToCoupon', async (req, res) => {
    try {
        const couponID = req.body.data.couponID;
        const BusinessesContract = createInstance(BusinessesContractAddress, BusinessABI)
        const couponDetails = await BusinessesContract.getCouponIDToCoupon(couponID);
        res.json({ couponDetails: couponDetails });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});






