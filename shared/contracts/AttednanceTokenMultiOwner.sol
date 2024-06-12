// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// Contract: AttendanceToken
// Description: This contract represents an ERC20 token for attendance tracking.
// Programmer: Cameron Denton and Hudon now 
// Created: 9/19/23
// Revised: 1/28/24

contract AttendanceToken is ERC20 {
    // State variable to store the contract owners' addresses
    mapping(address => bool) public isOwner;

    // Define an event for token minting
    event TokensMinted(address indexed to, uint256 amount, uint256 time, uint256 classSessionID, uint256 organizationID);

    // Mapping to store mint amounts for each organization
    mapping(uint256 => uint256) private organizationMintAmounts;

    // Constructor: AttendanceToken
    // Description: Initializes the contract and adds the sender to the owners.
    constructor() ERC20("Attendance Token", "AT") {
        isOwner[msg.sender] = true; // Adds msg.sender as an owner
    }

    // Modifier: onlyOwner
    // Description: Ensures that only an owner can execute a function.
    modifier onlyOwner() {
        require(isOwner[msg.sender], "You do not have the required privileges to do this");
        _;
    }

    // Function: addOwner
    // Description: Adds a new owner to the contract.
    // Parameters:
    // - _newOwner: The address to be added as a new owner
    // Preconditions: The address (_newOwner) must not already be an owner.
    function addOwner(address _newOwner) public onlyOwner {
        require(!isOwner[_newOwner], "Address is already an owner");
        isOwner[_newOwner] = true;
    }

    // Function: removeOwner
    // Description: Removes an owner from the contract.
    // Parameters:
    // - _owner: The address of the owner to be removed
    // Preconditions: The address (_owner) must be an existing owner.
    function removeOwner(address _owner) public onlyOwner {
        require(isOwner[_owner], "Address is not an owner");
        isOwner[_owner] = false;
    }

        // Function: setMintAmount
    // Description: Sets the mint amount for a specific organization.
    // Parameters:
    // - _organizationID: The ID of the organization
    // - _amount: The mint amount for the organization
    function setMintAmount(uint256 _organizationID, uint256 _amount) public onlyOwner {
        organizationMintAmounts[_organizationID] = _amount;
    }

    // Function: mint
    // Description: Mint new tokens and send them to the specified address, amount depends on organizationID.
    function mint(address _to, uint256 _classSessionID, uint256 _organizationID) public onlyOwner returns (bool) {
        uint256 mintAmount = organizationMintAmounts[_organizationID];
        require(_to != address(0), "Cannot mint to account 0x"); //require statement
        require(mintAmount > 0, "Mint amount not set for organization");
        _mint(_to, mintAmount); //mints the amount set for the organization
        emit TokensMinted(_to, mintAmount, block.timestamp, _classSessionID, _organizationID); // Emit the TokensMinted event
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
