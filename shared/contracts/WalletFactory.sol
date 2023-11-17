// Author: Cameron Denton
// Created: 10/22/23
// Last Modified: 10/22/23

// Solidity version declaration
pragma solidity ^0.8.0;

// Importing the Wallet contract for use
import "./Wallet.sol";

// Declaration of the WalletFactory contract
contract WalletFactory {
    
    // Array to store created wallet addresses
    address[] public Wallets;
    
    // Address of the owner of the WalletFactory contract
    address public owner;

    // Event declaration to notify when a wallet is created
    //event WalletCreated(string _firstName, string _lastName, string _organization, uint256 time, address _address);
    event WalletCreated(string _authId, string _organization, uint256 time, address _address, string _userType);

    // Constructor to initialize the owner
    constructor() {
        owner = msg.sender;
    }
    
    // Modifier to restrict access to only the owner
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    /*
     * @dev Create a new wallet.
     * @param _owner The address of the wallet owner.
     * @param _attendees The address of attendees.
     * @param _token The address of the token.
     * @param _businesses The address of associated businesses.
     * @param _firstName The first name of the wallet owner.
     * @param _lastName The last name of the wallet owner.
     * @param _organization The organization associated with the wallet owner.
     * @return A boolean indicating the success of wallet creation.
     */
    function createWallet(
        address _owner,
        string memory _authId,
        string memory _userType,
        address _attendees,
        address _token,
        address _businesses,
        string memory _organization
    ) public onlyOwner returns (bool) {
        // Create a new Wallet contract instance
        Wallet newWallet = new Wallet(_owner, _authId, _attendees, _token, _businesses, _organization);
        
        // Add the address of the newly created wallet to the array
        Wallets.push(address(newWallet));
        
        // Emit an event to indicate the creation of the wallet
        emit WalletCreated(_authId, _organization, block.timestamp, address(newWallet), _userType);
        
        // Return true to indicate success
        return true;
    }
}
