import { BigInt, Bytes } from "@graphprotocol/graph-ts";
import { TokensMinted } from "./generated/AttendanceToken/AttendanceToken";
import { Attendance, User, MintEvent, Token, OrganizationBalance, ClassEntity, Session, Organization } from "./generated/schema";

import { EnrolledClass, EnrolledClassSession } from "./generated/Classes/Classes";
import { WalletCreated } from "./generated/WalletFactory/WalletFactory";

export function handleWalletCreated(event: WalletCreated): void {
  let user = new User(event.params._address.toHexString());
  user.address = event.params._address;
  user.balance = BigInt.fromI32(0);
  user.timestamp = BigInt.fromString(event.params.time.toString()); // Corrected conversion
  user.authId = event.params._authId;
  user.userType = event.params._userType;
  user.save();
}

export function handleEnrolledClass(event: EnrolledClass): void {
  let classEntity = new ClassEntity(event.params.classId.toString());
  classEntity.name = event.params.className;
  classEntity.classId = event.params.classId;
  classEntity.timestamp = event.params.time.toI32();

  let teacherUser = User.load(event.params.teacher.toHexString());
  if (teacherUser) {
    classEntity.teacher = teacherUser.id;
  }

  classEntity.save();
}

export function handleEnrolledClassSession(event: EnrolledClassSession): void {
  let sessionEntity = new Session(event.params.sessionId.toString()); // Updated to Session
  let classEntity = ClassEntity.load(event.params.classId.toString());

  if (classEntity) {
    sessionEntity.classEntity = classEntity.id; // Ensure this matches the schema
    sessionEntity.sessionId = event.params.sessionId;
    sessionEntity.timestamp = event.params.time.toI32();
    sessionEntity.attendanceCount = 0;

    let teacherUser = User.load(event.params.teacher.toHexString());
    if (teacherUser) {
      sessionEntity.teacher = teacherUser.id;
    }

    sessionEntity.save();
  }
}

export function handleTokensMinted(event: TokensMinted): void {
  let mintEvent = new MintEvent(event.transaction.hash.toHex());

  let user = User.load(event.params.to.toHexString());
  if (!user) {
    user = new User(event.params.to.toHexString());
    user.address = event.params.to;
    user.balance = BigInt.fromI32(0);
    user.timestamp = event.block.timestamp;
    user.authId = ""; // Default value or extract from another source if available
    user.userType = ""; // Default value or extract from another source if available
  }
  user.balance = user.balance.plus(event.params.amount);
  user.save();

  mintEvent.recipient = user.id;
  mintEvent.amount = event.params.amount;
  mintEvent.time = event.params.time.toI32();

  let sessionEntity = Session.load(event.params.classSessionID.toString());
  if (sessionEntity) {
    mintEvent.classSession = sessionEntity.id;
    sessionEntity.attendanceCount = sessionEntity.attendanceCount + 1;
    sessionEntity.save();
  }

  let organization = Organization.load(event.params.organizationID.toString());
  if (!organization) {
    organization = new Organization(event.params.organizationID.toString());
    organization.name = "ku"; // Set a default name or extract from another source if available
    organization.organizationId = event.params.organizationID;
    organization.timestamp = event.block.timestamp.toI32();
    // Initialize balances array if needed
    // organization.balances = []; // Uncomment and use if you need to initialize the balances array
    organization.save();
  }
  mintEvent.organization = organization.id;
  mintEvent.save();

  // Updating organization-specific balance for the User
  if (organization) {
    let orgBalanceId = user.id + "-" + organization.id;
    let orgBalance = OrganizationBalance.load(orgBalanceId);
    if (!orgBalance) {
      orgBalance = new OrganizationBalance(orgBalanceId);
      orgBalance.user = user.id;
      orgBalance.organization = organization.id;
      orgBalance.balance = BigInt.fromI32(0);
    }
    orgBalance.balance = orgBalance.balance.plus(event.params.amount);
    orgBalance.save();
  }

  // Update total minted tokens
  let token = Token.load("1");
  if (!token) {
    token = new Token("1");
    token.totalMinted = BigInt.fromI32(0);
  }
  token.totalMinted = token.totalMinted.plus(event.params.amount);
  token.save();

}
