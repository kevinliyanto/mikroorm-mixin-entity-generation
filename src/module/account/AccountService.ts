import { InjectRepository } from "@mikro-orm/nestjs";
import { Injectable } from "@nestjs/common";
import { Account } from "../../entity/Account";
import { AccountRepository } from "./AccountRepository";

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: AccountRepository
  ) {}

  public async getAccount(id: number): Promise<Account> {
    return await this.accountRepository.findOneOrFail<Account>(id);
  }
}
