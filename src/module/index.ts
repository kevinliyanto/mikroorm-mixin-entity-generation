import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";
import { Account } from "../entity/Account";
import { AccountModule } from "./account/AccountModule";

@Module({
  imports: [
    MikroOrmModule.forRoot({
      entities: [Account],
      type: "sqlite",
      dbName: ":memory:",
      logger: (message: string) => console.log(message),
      debug: true,
    }),
    AccountModule,
  ],
  controllers: [],
  providers: [],
})
export class MainModule {}
