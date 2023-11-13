// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// Contract: AttendanceToken
// Description: This contract represents an ERC20 token for attendance tracking.
// Programmer: Cameron Denton
// Created: 9/19/23
// Revised: 9/19/23

contract AttendanceToken is ERC20 {
    // State variable to store the contract owner's address
    address public owner;

    // Define an event for token minting
    event TokensMinted(address indexed to, uint256 amount, uint256 time, uint256 classSessionID, uint256 organizationID);

    // Constructor: AttendanceToken
    // Description: Initializes the contract and sets the owner to the sender's address.
    constructor() ERC20("Attendance Token", "AT") {
        owner = msg.sender; //sets mesg.sender as owner
    }

    // Modifier: onlyOwner
    // Description: Ensures that only the owner can execute a function.
    modifier onlyOwner() {
        require(msg.sender == owner, "You do not have the required privileges to do this"); //require statement
        _;
    }

    // Function: mint
    // Description: Mint new tokens and send them to the specified address.
    // Parameters:
    // - _to: The recipient's address
    // - _amount: The amount of tokens to mint
    // Preconditions: The recipient's address (_to) must not be the zero address.
    // Acceptable Input Values: Any valid Ethereum address for _to, non-negative _amount
    // Unacceptable Input Values: Zero address for _to
    // Postconditions: New tokens are minted and sent to _to
    // Return: True if the minting is successful
    // Error and Exception Conditions: Throws an error if _to is the zero address.
    // Side Effects: Minting new tokens
    function mint(address _to, uint256 _amount, uint256 _classSessionID, uint256 _organizationID) public onlyOwner returns (bool) {
        require(_to != address(0), "Cannot mint to account 0x"); //require statement
        _mint(_to, _amount); //mints to the amount
        emit TokensMinted(_to, _amount, block.timestamp, _classSessionID, _organizationID); // Emit the TokensMinted event
        return true; //return true if successful
    }

    // Function: transfer (override)
    // Description: Overrides the ERC20 transfer function to disable transfers.
    // Parameters:
    // - _to: The recipient's address (not used)
    // - _amount: The amount of tokens to transfer (not used)
    // Returns: Always reverts with a message indicating transfers are not allowed.
    function transfer(address, uint256) public pure override returns (bool) {
        revert("Transfers are not allowed"); //reverts so this function cannot be called
    }
}
