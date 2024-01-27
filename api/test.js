// test.js
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

// Now you can call any function from client.js using the generic function
callClientFunction('enrollBusiness', 'Thisisatest');
