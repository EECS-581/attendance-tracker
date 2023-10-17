//creates the wallet and emits event and stores address
pragma solidity ^0.8.0;
import "./Wallet.sol";

contract WalletFactory{

    address[] public Wallets;
    address public owner;

    event WalletCreated(string _firstName, string _lastName, string _organization, uint256 time, address _address);

    constructor(){
        owner = msg.sender;
    }

    modifier onlyOwner(){
        require(msg.sender == owner);
        _;
    }

    function createWallet(address _owner, address _attendees, address _token, address _businesses, string memory _firstName, string memory _lastName, string memory _organization)public onlyOwner returns(bool){
        Wallet newWallet = new Wallet(msg.sender, _attendees, _token, _businesses, _firstName, _lastName, _organization);
        Wallets.push(newWallet);
        emit WalletCreated(_firstName, _lastName, _organization, block.timestamp, address(newWallet));
        return true;


    }

}