import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlayersRepository } from './repositories/player.repository';
import { MatchesRepository } from './repositories/match.repository';
import { MatchPlayersRepository } from './repositories/matchPlayer.repository';
import { PlayerFetchIntervalsRepository } from './repositories/playerFetchInterval.repository';

@Injectable()
export class DbContext {
    @InjectRepository(PlayersRepository, 'default')
    public readonly Players: PlayersRepository;

    @InjectRepository(MatchesRepository, 'default')
    public readonly Matches: MatchesRepository;

    @InjectRepository(MatchPlayersRepository, 'default')
    public readonly MatchPlayers: MatchPlayersRepository;

    @InjectRepository(PlayerFetchIntervalsRepository, 'default')
    public readonly PlayerFetchIntervals: PlayerFetchIntervalsRepository;
}
