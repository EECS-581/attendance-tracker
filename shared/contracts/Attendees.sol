pragma solidity ^0.8.0;

contract Attendees {

    address owner;

    constructor(){
        owner = msg.sender;
    }
    
    struct Attendee {
        string firstName;
        string lastName;
        uint256 organizationID;
    }

    modifier onlyOwner(){
        require(msg.sender == owner, "You do not have the require priviliges to do this");
        _;
    }

    mapping(address=>Attendee) public addressToAttendee;
    mapping(uint256=>string) public idtoOrganization;
    mapping(string=>uint256) public organizationToID; 

    function createAttendee(address _account,string memory _firstName, string memory _lastName, uint256 _organizationID)public onlyOwner returns (bool){
        Attendee memory attendee = Attendee(_firstName, _lastName, _organizationID);
        addressToAttendee[_account] = attendee;
        return(true);
    }

    function getAddressToAttendee(address _account) external view returns (string memory firstName, string memory lastName, uint256 organizationID){
        Attendee memory attendee = addressToAttendee[_account];
        firstName = attendee.firstName;
        lastName = attendee.lastName;
        organizationID = attendee.organizationID;
    }

    function setOrganizationID(string memory _string, uint256 _organizationID)public onlyOwner returns (bool){
        require(organizationToID[_string] == 0, "This Organization already has an ID");
        require(keccak256(abi.encodePacked(idtoOrganization[_organizationID])) == keccak256(abi.encodePacked("")), "This Organization ID is already taken");
        organizationToID[_string] = _organizationID;
        idtoOrganization[_organizationID] = _string;
        return(true);
    }

}
