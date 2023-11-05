// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Contract: Attendees
// Description: This contract manages attendee information and organization IDs.
// Programmer: Cameron Denton
// Created: 9/19/23
// Revised: 9/19/23

contract Attendees {
    // State variable to store the contract owner's address
    //sets organization counter to keep track of ID's
    //State variable for total organizations added
    address owner;
    uint256 organizationCounter = 1;
    string[] Organizations;

    // Constructor: Attendees
    // Description: Initializes the contract and sets the owner to the sender's address.
    constructor() {
        owner = msg.sender;
    }
    
    // Struct: Attendee
    // Description: Represents an attendee with first name, last name, and organization ID.
    struct Attendee {
        uint256 organizationID;
    }

    // Modifier: onlyOwner
    // Description: Ensures that only the owner can execute a function.
    modifier onlyOwner() {
        require(msg.sender == owner, "You do not have the required privileges to do this");
        _;
    }

    // Mapping: addressToAttendee
    // Description: Maps Ethereum addresses to Attendee structs.
    mapping(address => Attendee) public addressToAttendee;

    // Mapping: idtoOrganization
    // Description: Maps organization IDs (uint256) to organization names (string).
    mapping(uint256 => string) public idtoOrganization;

    // Mapping: organizationToID
    // Description: Maps organization names (string) to organization IDs (uint256).
    mapping(string => uint256) public organizationToID; 

    // Event: AttendeeCreated
    event AttendeeCreated(address indexed attendeeAddress, uint256 organizationID, uint256 time);

    // Event: OrganizationIDSet
    event OrganizationIDSet(string organizationName, uint256 organizationID, uint256 time);

    // Function: createAttendee
    // Description: Creates a new Attendee and associates it with an Ethereum address.
    // Parameters:
    // - _account: The Ethereum address of the attendee
    // - _firstName: The first name of the attendee
    // - _lastName: The last name of the attendee
    // - _organizationID: The organization ID of the attendee
    // Preconditions: None
    // Acceptable Input Values: Valid Ethereum address for _account, non-empty strings for _firstName and _lastName, non-negative _organizationID
    // Unacceptable Input Values: None
    // Postconditions: A new Attendee is created and associated with _account
    // Return: True if the operation is successful
    function createAttendee(address _account, string memory _organization) public returns (bool) {
        if(organizationToID[_organization] == 0){ //checks to see if organization has ID
            setOrganizationID(_organization); //if not sets ID
        }
        uint256 _organizationID = organizationToID[_organization]; //sets value
        Attendee memory attendee = Attendee(_organizationID); //creates attendee
        addressToAttendee[_account] = attendee; //adds attendee
        emit AttendeeCreated(_account, _organizationID, block.timestamp); // Emit the AttendeeCreated event
        return true; //return true
    }

    // Function: getAddressToAttendee
    // Description: Retrieves attendee information associated with an Ethereum address.
    // Parameters:
    // - _account: The Ethereum address of the attendee
    // Returns:
    // - firstName: The first name of the attendee
    // - lastName: The last name of the attendee
    // - organizationID: The organization ID of the attendee
    // Preconditions: None
    // Acceptable Input Values: Valid Ethereum address for _account
    // Unacceptable Input Values: None
    // Postconditions: Attendee information is retrieved
    function getAddressToAttendee(address _account) external view returns (uint256 organizationID) {
        Attendee memory attendee = addressToAttendee[_account]; // get attendee
        organizationID = attendee.organizationID; //set id
    }

    // Function: setOrganizationID
    // Description: Sets an organization's ID and associates it with an organization name.
    // Parameters:
    // - _string: The organization name
    // - _organizationID: The organization ID to be associated with _string
    // Preconditions: The organization name must not already have an associated ID, and the specified organization ID must not already be taken.
    // Acceptable Input Values: Non-empty string for _string, non-negative _organizationID
    // Unacceptable Input Values: Duplicate organization names or organization IDs
    // Postconditions: The organization ID is set and associated with _string
    // Return: True if the operation is successful
    function setOrganizationID(string memory _string) public returns (bool) {
        require(organizationToID[_string] == 0, "This Organization already has an ID"); //requires not sending to zero address
        require(keccak256(abi.encodePacked(idtoOrganization[organizationCounter])) == keccak256(abi.encodePacked("")), "This Organization ID is already taken"); //checks to make sure business string is not empty
        organizationToID[_string] = organizationCounter; //sets id
        idtoOrganization[organizationCounter] = _string; //sets string
        organizationCounter++; //increase counter
        Organizations.push(_string); //adds to list of organizations
        emit OrganizationIDSet(_string, organizationCounter, block.timestamp); // Emit the OrganizationIDSet event
        return true; //returns true if successful 
    }

    // Function to retrieve the unique identifier (ID) associated with an organization's name
function getOrganizationToId(string memory _name) public view returns (uint256) {
    return organizationToID[_name]; // Returns the ID corresponding to the provided organization name
}

}
