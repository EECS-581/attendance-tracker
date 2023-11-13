import { BigInt } from "@graphprotocol/graph-ts";
import { TokensMinted } from "./generated/AttendanceToken/AttendanceToken";
import { User, MintEvent, Token } from "./generated/schema";

import { EnrolledClass, EnrolledClassSession } from "./generated/Classes/Classes";
import { Class, ClassSession } from "./generated/schema";


import { WalletCreated } from "./generated/WalletFactory/WalletFactory"
import { Wallet } from "./generated/schema"

export function handleWalletCreated(event: WalletCreated): void {
  let user = new User(event.params._address.toHexString());
  user.address = event.params._address;
  user.balance = BigInt.fromI32(0);  // Initialize balance
  user.timestamp = event.block.timestamp;
  user.authId = event.params._authId.toString();
  user.userType = event.params._userType.toString();
  user.save();
}


export function handleEnrolledClass(event: EnrolledClass): void {
  let classEntity = new Class(event.params.classId.toString());
  classEntity.name = event.params.className;
  classEntity.classId = event.params.classId;
  classEntity.timestamp = event.params.time.toI32();
  classEntity.teacher = event.params.teacher;
  classEntity.save();
}

export function handleEnrolledClassSession(event: EnrolledClassSession): void {
  let sessionEntity = new ClassSession(event.params.sessionId.toString());
  sessionEntity.className = event.params.className;
  sessionEntity.classId = event.params.classId;
  sessionEntity.sessionId = event.params.sessionId;
  sessionEntity.timestamp = event.params.time.toI32();
  sessionEntity.teacher = event.params.teacher;
  sessionEntity.save();
}


export function handleTokensMinted(event: TokensMinted): void {
  // Handle the mint event
  let mintEvent = new MintEvent(event.transaction.hash.toHex());
  mintEvent.to = event.params.to;
  mintEvent.amount = event.params.amount;
  mintEvent.time = event.params.time.toI32();
  mintEvent.classSessionID = event.params.classSessionID;
  mintEvent.save();

  // Update the User's balance
  let user = User.load(event.params.to.toHex());
  if (!user) {
      user = new User(event.params.to.toHex());
      user.address = event.params.to;
      user.balance = BigInt.fromI32(0);
      user.timestamp = event.block.timestamp; // Set a default timestamp
      user.authId = ""; // Default authId
      user.userType = ""; // Default userType
  }
  user.balance = user.balance.plus(event.params.amount);
  user.save();

  // Update the total minted tokens
  let token = Token.load("1");
  if (!token) {
      token = new Token("1");
      token.totalMinted = BigInt.fromI32(0);
  }
  token.totalMinted = token.totalMinted.plus(event.params.amount);
  token.save();
}

