pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AttendanceToken is ERC20{

    address public owner;

    constructor() ERC20("Attendance Token", "AT"){
        owner = msg.sender;
    }

    modifier onlyOwner(){
        require(msg.sender == owner, "You do not have the require priviliges to do this");
        _;
    }

    function mint(address _to, uint256 _amount)public onlyOwner returns(bool){
        require(_to != address(0), "Cannot mint to account 0x");
        _mint(_to, _amount);
        return(true);
    }

    function transfer(address, uint256) public pure override returns (bool) {
        revert("Transfers are not allowed");
    }

}