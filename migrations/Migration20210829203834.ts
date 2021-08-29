import { Migration } from '@mikro-orm/migrations';

export class Migration20210829203834 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `account` (`id` integer not null primary key autoincrement, `created_at` datetime not null, `deleted_at` datetime null, `modified_at` datetime not null, `name` varchar not null);');
  }

}
