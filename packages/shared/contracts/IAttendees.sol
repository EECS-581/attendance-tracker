// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Interface: IAttendees
// Description: This interface defines the function for retrieving attendee information.
// Programmer: Cameron Denton
// Created: 9/19/23
// Revised: [Dates of Revisions]
// - [Brief Description of Revision 1 & Author]
// - [Brief Description of Revision 2 & Author]
interface IAttendees {
    // Function: getAddressToAttendee
    // Description: Retrieves attendee information associated with an Ethereum address.
    // Parameters:
    // - _account: The Ethereum address of the attendee
    // Returns:
    // - firstName: The first name of the attendee
    // - lastName: The last name of the attendee
    // - organizationID: The organization ID of the attendee
    function getAddressToAttendee(address _account) external view returns (string memory firstName, string memory lastName, uint256 organizationID);
}
