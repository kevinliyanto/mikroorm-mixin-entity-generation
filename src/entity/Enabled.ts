import { Property } from "@mikro-orm/core";

export abstract class Enabled {
  @Property()
  enabled: boolean = true;
}
