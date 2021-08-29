import { Property } from "@mikro-orm/core";

export abstract class Balance {
  @Property()
  balance: number = 0.0;

  addBalance(balance: number) {
    this.balance += balance;
  }
}
