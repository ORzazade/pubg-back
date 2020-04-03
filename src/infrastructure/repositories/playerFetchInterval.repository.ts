import { EntityRepository, Repository } from 'typeorm';
import { PlayerFetchInterval } from '../../domain/models/playerFetchInterval.model';

@EntityRepository(PlayerFetchInterval)
export class PlayerFetchIntervalsRepository extends Repository<PlayerFetchInterval> {
    findById(name: string): Promise<PlayerFetchInterval> {
        return this.findOne({ where: { name: name } });
    }
}
