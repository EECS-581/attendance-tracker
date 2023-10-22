//Author Cameron Denton
//Created 10:20:23
//Last Modified: 10/20/23

// Specifies the Solidity compiler version to be used (greater than or equal to 0.8.0)
pragma solidity ^0.8.0;

// Define a contract named "Classes"
contract Classes {
    
    // Public variable to store the address of the contract owner
    address public owner;

    // A mapping to associate class names (strings) with unique class IDs (uint256)
    mapping(string => uint256) public classToId;

    // A mapping to track whether a class ID has been taken (boolean)
    mapping(uint256 => bool) public takenClassIds;

    // A mapping to track whether a class session ID is valid (boolean)
    mapping(uint256 => bool) public validClassSession;

    // A mapping to track whether a class session ID has been taken (boolean)
    mapping(uint256 => bool) public takenClassSession;

    // Event emitted when a class is enrolled
    event EnrolledClass(string className, uint256 classId, uint256 time);

    // Event emitted when a class session is enrolled
    event EnrolledClassSession(string className, uint256 classId, uint256 sessionId, uint256 time);

    // Constructor function runs when the contract is deployed
    constructor() {
        // Set the contract owner to the address of the deployer
        owner = msg.sender;
    }

    // Modifier to restrict certain functions to be callable only by the owner
    modifier onlyOwner() {
        // Require that the sender of the transaction is the owner
        require(msg.sender == owner, "you are not the owner of this contract");
        _; // Continue executing the function if the condition is met
    }

    // Function to enroll a class, takes a class name and class ID as input
    function enrollClass(string memory _className, uint256 _id) public onlyOwner returns (bool) {
        // Check if the class ID has not been taken
        require(!takenClassIds[_id], "This class id has already been taken");
        // Check if the class name already has an associated ID
        require(classToId[_className] == 0, "this class already has an id");
        // Map the class name to the provided ID
        classToId[_className] = _id;
        // Mark the class ID as taken
        takenClassIds[_id] = true;
        // Emit an event indicating class enrollment
        emit EnrolledClass(_className, _id, block.timestamp);
        return true; // Return true to indicate success
    }

    // Function to enroll a class session, takes a class name and session ID as input
    function enrollClassSession(string memory _className, uint256 _sessionId) public onlyOwner returns (bool) {
        // Check if the class has been enrolled (associated with an ID)
        require(classToId[_className] != 0, "this class has not been enrolled");
        // Check if the session ID has not been taken
        require(!takenClassSession[_sessionId], "This class session id has already been taken");
        // Mark the session ID as valid
        validClassSession[_sessionId] = true;
        // Emit an event indicating class session enrollment
        emit EnrolledClassSession(_className, classToId[_className], _sessionId, block.timestamp);
        return true; // Return true to indicate success
    }

    // Function to check if a session ID is valid, takes the session ID as input
    function validSessionChecker(uint256 _sessionId) public view returns (bool) {
        // Return whether the provided session ID is valid
        return validClassSession[_sessionId];
    }
}
