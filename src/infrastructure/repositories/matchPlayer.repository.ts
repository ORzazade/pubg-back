import { EntityRepository, Repository } from 'typeorm';
import { MatchPlayer } from '../../domain/models/matchPlayer.model';

@EntityRepository(MatchPlayer)
export class MatchPlayersRepository extends Repository<MatchPlayer> {
    findById(id: string): Promise<MatchPlayer> {
        return this.findOne({ id });
    }
}
