import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";
import { Account } from "../../entity/Account";
import { AccountController } from "./AccountController";
import { AccountService } from "./AccountService";

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Account] })],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
