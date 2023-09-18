pragma solidity ^0.8.0;

interface IAttendees {

    function getAddressToAttendee(address _account) external view returns (string memory firstName, string memory lastName, uint256 organizationID);

}