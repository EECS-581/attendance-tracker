pragma solidity ^0.8.0;

contract Classes {
    
    address public owner;

    mapping(string=>uint256) public classToId;

    mapping(uint256=>bool) public takenClassIds;

    mapping(uint256=>bool) public validClassSession;

    mapping(uint256=>bool) public takenClassSession;

    event EnrolledClass(string className, uint256 classId, uint256 time);

    event EnrolledClassSession(string className, uint256 classId, uint256 sessionId, uint256 time);

    constructor(){
        owner = msg.sender;
    }

    modifier onlyOwner(){
        require(msg.sender == owner, "you are not the owner of this contract");
        _;
    }

    function enrollClass(string memory _className, uint256 _id)public onlyOwner returns(bool){
        require(!takenClassIds[_id], "This class id has already been taken");
        require(classToId[_className] == 0, "this class already has an id");
        classToId[_className] = _id;
        takenClassIds[_id] = true;
        emit EnrolledClass(_className, _id, block.timestamp);
        return true;
    }

    function enrollClassSession(string memory _className, uint256 _sessionId) public onlyOwner returns(bool){
        require(classToId[_className] != 0, "this class has not been enrolled");
        require(!takenClassSession[_sessionId], "This class session id has already been taken");
        validClassSession[_sessionId] = true;
        emit EnrolledClassSession(_className, classToId[_className], _sessionId, block.timestamp);
        return true;
    }

    function validSessionChecker(uint256 _sessionId)public view returns(bool){
        return validClassSession[_sessionId];
    }
}