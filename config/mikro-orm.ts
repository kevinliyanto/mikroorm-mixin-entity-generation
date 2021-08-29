/* eslint-disable import/no-unused-modules */
import { Options } from "@mikro-orm/core";
import { Account } from "../src/entity/Account";

const config: Options = {
  entities: [Account],
  type: "sqlite",
  dbName: ":memory:",
  migrations: {
    dropTables: true,
    safe: false,
  },

  forceUndefined: true,
};

// Export for MikroORM CLI
// eslint-disable-next-line import/no-default-export
export default config;
