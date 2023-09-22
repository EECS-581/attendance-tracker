// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Interface: IAttendanceToken
// Description: This interface defines the functions for an Attendance Token.
// Programmer: Cameron Denton
// Created: 9/23/19
// Revised: [Dates of Revisions]
// - [Brief Description of Revision 1 & Author]
// - [Brief Description of Revision 2 & Author]
interface IAttendanceToken {
    // Function: balanceOf
    // Description: Retrieves the balance of tokens for a given address.
    // Parameters:
    // - _owner: The address for which the balance is queried
    // Returns: The token balance of the specified address
    function balanceOf(address _owner) external view returns (uint256);

    // Function: transferFrom
    // Description: Transfers tokens from one address to another.
    // Parameters:
    // - _from: The sender's address
    // - _to: The recipient's address
    // - _value: The amount of tokens to transfer
    // Returns: True if the transfer is successful
    function transferFrom(address _from, address _to, uint256 _value) external returns (bool);
}
