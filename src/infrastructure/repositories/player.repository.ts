import { EntityRepository, Repository } from 'typeorm';
import { Player } from 'domain/models/player.model';

@EntityRepository(Player)
export class PlayersRepository extends Repository<Player> {
    findById(id: string): Promise<Player> {
        return this.findOne({ id });
    }
}
