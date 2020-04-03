import { Injectable } from '@nestjs/common';
import {  PlayerFetchIntervalsSeeder } from '../seeders';

@Injectable()
export class SeederService {
    constructor(private readonly playerFetchIntervalsSeeder: PlayerFetchIntervalsSeeder) {}

    async runSeedsAsync() {
        await this.playerFetchIntervalsSeeder.run();
    }
}
