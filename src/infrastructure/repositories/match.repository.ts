import { EntityRepository, Repository } from 'typeorm';
import { Match } from '../../domain/models/match.model';

@EntityRepository(Match)
export class MatchesRepository extends Repository<Match> {
    findById(id: string): Promise<Match> {
        return this.findOne({ id });
    }
}
