import { PrimaryKey, Property } from "@mikro-orm/core";

export abstract class BaseEntity {
  @PrimaryKey()
  id!: number;

  @Property()
  createdAt: Date = new Date();

  @Property({ nullable: true })
  deletedAt?: Date;

  @Property({ onUpdate: () => new Date() })
  modifiedAt: Date = new Date();
}
