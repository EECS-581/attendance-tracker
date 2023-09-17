//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IAttendanceToken {
    
    function balanceOf(address)external view returns(uint256);

    function transferFrom(address, address, uint256)external returns (bool);

}