import { Injectable } from '@nestjs/common';
import { DbContext } from '../dbContext';
import { PlayerFetchInterval } from 'src/domain/models/playerFetchInterval.model';

const playerFetchIntervals = [{
    name: "BOT_Andre",
    fetchIntervalMs: 30000
}, {
    name: "Goobeez",
    fetchIntervalMs: 30000
}, {
    name: "Blarley",
    fetchIntervalMs: 30000
}, {
    name: "Bevo",
    fetchIntervalMs: 30000
}, {
    name: "SIX-MO",
    fetchIntervalMs: 30000
},
{
    name: "Selah",
    fetchIntervalMs: 30000
}]
@Injectable()
export class PlayerFetchIntervalsSeeder {
    constructor(private readonly dbContext: DbContext) { }

    public async run(): Promise<any> {
        const count = await this.dbContext.PlayerFetchIntervals.count();
        if (count > 0) return;
        const pfis = []
        playerFetchIntervals.forEach(pfi => {
            const fetchInterval = new PlayerFetchInterval();
            fetchInterval.setDetail(pfi.name, pfi.fetchIntervalMs)
            pfis.push(fetchInterval)

        });

        await this.dbContext.PlayerFetchIntervals.save(pfis)
    }
}
