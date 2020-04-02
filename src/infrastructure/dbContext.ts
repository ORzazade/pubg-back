import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlayersRepository } from './repositories/player.repository';

@Injectable()
export class DbContext {
    @InjectRepository(PlayersRepository, 'default')
    public readonly Players: PlayersRepository;
}
