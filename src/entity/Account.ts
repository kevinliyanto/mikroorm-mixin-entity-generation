import { Entity, EntityRepositoryType, Property } from "@mikro-orm/core";
import { AccountRepository } from "../module/account/AccountRepository";
import { applyMixins } from "../utils/mixin";
import { Balance } from "./Balance";
import { BaseEntity } from "./BaseEntity";
import { Enabled } from "./Enabled";

@Entity()
class Account extends BaseEntity {
  [EntityRepositoryType]?: AccountRepository;

  @Property()
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }
}

interface Account extends BaseEntity, Balance, Enabled {}

applyMixins(Account, [Balance, Enabled]);

export { Account };
