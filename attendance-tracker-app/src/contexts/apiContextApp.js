import React, { createContext, useContext } from 'react';

// Context creation
const ApiContextApp = createContext();

// Context Provider Component
export const ApiAppProvider = ({ children }) => {
    const apiUrl = 'http://localhost:3000'; // Replace with your actual API base URL

    const createClass = async (className, classId, teacher) => {
        try {
            const response = await fetch(`${apiUrl}/createClass`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ data: { className, classId, teacher } }),
            });
            return await response.json();
        } catch (error) {
            console.error('Error in createClass:', error);
            throw error;
        }
    };

    const createClassSession = async (className, sessionId, teacher) => {
        try {
            const response = await fetch(`${apiUrl}/createClassSession`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ data: { className, sessionId, teacher } }),
            });
            return await response.json();
        } catch (error) {
            console.error('Error in createClassSession:', error);
            throw error;
        }
    };

    const enrollBusiness = async (businessName) => {
        try {
            const response = await fetch(`${apiUrl}/enrollBusiness`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ data: { businessName } }),
            });
            return await response.json();
        } catch (error) {
            console.error('Error in enrollBusiness:', error);
            throw error;
        }
    };

    const createCoupon = async (businessName, price, supply, description, banlist) => {
        try {
            const response = await fetch(`${apiUrl}/createCoupon`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ data: { businessName, price, supply, description, banlist } }),
            });
            return await response.json();
        } catch (error) {
            console.error('Error in createCoupon:', error);
            throw error;
        }
    };

    const businessCoupons = async (businessName) => {
        try {
            const response = await fetch(`${apiUrl}/businessCoupons`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ data: { businessName } }),
            });
            return await response.json();
        } catch (error) {
            console.error('Error in businessCoupons:', error);
            throw error;
        }
    };

    const businessesList = async () => {
        try {
            const response = await fetch(`${apiUrl}/businessesList`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });
            return await response.json();
        } catch (error) {
            console.error('Error in businessesList:', error);
            throw error;
        }
    };

    const businessToID = async (businessName) => {
        try {
            const response = await fetch(`${apiUrl}/businessToID`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ data: { businessName } }),
            });
            return await response.json();
        } catch (error) {
            console.error('Error in businessToID:', error);
            throw error;
        }
    };

    const businessToCouponIDs = async (businessID) => {
        try {
            const response = await fetch(`${apiUrl}/businessToCouponIDs`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ data: { businessID } }),
            });
            return await response.json();
        } catch (error) {
            console.error('Error in businessToCouponIDs:', error);
            throw error;
        }
    };

    const couponIDToCoupon = async (couponID) => {
        try {
            const response = await fetch(`${apiUrl}/couponIDToCoupon`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ data: { couponID } }),
            });
            return await response.json();
        } catch (error) {
            console.error('Error in couponIDToCoupon:', error);
            throw error;
        }
    };

    const contextValue = {
        createClass,
        createClassSession,
        enrollBusiness,
        createCoupon,
        businessCoupons,
        businessesList,
        businessToID,
        businessToCouponIDs,
        couponIDToCoupon,
    };

    return (
        <ApiContextApp.Provider value={contextValue}>
            {children}
        </ApiContextApp.Provider>
    );
};


