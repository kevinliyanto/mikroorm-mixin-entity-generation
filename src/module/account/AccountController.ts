import { Controller, Get, Param } from "@nestjs/common";
import { Account } from "../../entity/Account";

import { AccountService } from "./AccountService";

@Controller("/account")
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get("/:id")
  async getAccount(@Param("id") id: string): Promise<Account> {
    return await this.accountService.getAccount(parseInt(id));
  }
}
