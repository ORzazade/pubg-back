import { Injectable } from '@nestjs/common';
import {  UsersSeeder } from '../seeders';

@Injectable()
export class SeederService {
    constructor(private readonly usersSeeder: UsersSeeder) {}

    async runSeedsAsync() {
        await this.usersSeeder.run();
    }
}
