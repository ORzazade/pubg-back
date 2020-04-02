import { Injectable } from '@nestjs/common';
import { DbContext } from '../dbContext';

@Injectable()
export class UsersSeeder {
    constructor(private readonly dbContext: DbContext) {}

    public async run(): Promise<any> {
        return
        // const [, count] = await this.dbContext.users.findAndCount();
        // if (count > 0) return;

        // const adminRole = await this.dbContext.roles.findOne({ name: 'admin' });
        // await this.dbContext.credentials.addWithCredential('master@thetable.app', '1234', adminRole && adminRole.id);
    }
}
