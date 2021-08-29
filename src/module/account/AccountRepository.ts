import { EntityRepository, Repository } from "@mikro-orm/core";
import { Account } from "../../entity/Account";

@Repository(Account)
export class AccountRepository extends EntityRepository<Account> {}
