import { BigInt } from "@graphprotocol/graph-ts";
import { TokensMinted } from "./generated/AttendanceToken/AttendanceToken";
import { TokenHolder, MintEvent, Token } from "./generated/schema";

import { EnrolledClass, EnrolledClassSession } from "./generated/Classes/Classes";
import { Class, ClassSession } from "./generated/schema";

export function handleEnrolledClass(event: EnrolledClass): void {
  let classEntity = new Class(event.params.classId.toString());
  classEntity.name = event.params.className;
  classEntity.classId = event.params.classId;
  classEntity.timestamp = event.params.time.toI32();
  classEntity.save();
}

export function handleEnrolledClassSession(event: EnrolledClassSession): void {
  let sessionEntity = new ClassSession(event.params.sessionId.toString());
  sessionEntity.className = event.params.className;
  sessionEntity.classId = event.params.classId;
  sessionEntity.sessionId = event.params.sessionId;
  sessionEntity.timestamp = event.params.time.toI32();
  sessionEntity.save();
}

// ... rest of the mapping functions ...


export function handleTokensMinted(event: TokensMinted): void {
  // Handle the mint event
  let mintEvent = new MintEvent(event.transaction.hash.toHex());
  mintEvent.to = event.params.to;
  mintEvent.amount = event.params.amount;
  mintEvent.time = event.params.time.toI32();
  mintEvent.classSessionID = event.params.classSessionID;  // Added this line
  mintEvent.save();

  // Update the TokenHolder's balance
  let tokenHolder = TokenHolder.load(event.params.to.toHex());
  if (!tokenHolder) {
    tokenHolder = new TokenHolder(event.params.to.toHex());
    tokenHolder.address = event.params.to;
    tokenHolder.balance = BigInt.fromI32(0);
  }
  tokenHolder.balance = tokenHolder.balance.plus(event.params.amount);
  tokenHolder.save();

  // Update the total minted tokens
  let token = Token.load("1");
  if (!token) {
    token = new Token("1");
    token.totalMinted = BigInt.fromI32(0);
  }
  token.totalMinted = token.totalMinted.plus(event.params.amount);
  token.save();
}