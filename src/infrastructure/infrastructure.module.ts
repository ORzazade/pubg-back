import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { DbContext } from './dbContext';
import { PlayersRepository } from './repositories/player.repository';
import { PlayerFetchIntervalsSeeder } from './seeders';
import { SeederService } from './services/seeder.service';
import { MatchesRepository } from './repositories/match.repository';
import { MatchPlayersRepository } from './repositories/matchPlayer.repository';
import { PlayerFetchIntervalsRepository } from './repositories/playerFetchInterval.repository';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            name: 'default',
            host: process.env.POSTGRES_URL || 'localhost',
            username: 'postgres',
            password: 'Rzazade0',
            database: 'pub',
            synchronize: true,
            logging: false,
            migrationsRun: true,
            entities: [path.join(__dirname, '..', 'domain/models/*.model.{ts,js}')],
            migrations: [path.join(__dirname, 'migrations/default/*.{ts,js}')],
        }),
        TypeOrmModule.forFeature(
            [
                PlayersRepository,
                MatchesRepository,
                MatchPlayersRepository,
                PlayerFetchIntervalsRepository
            ],
            'default',
        ),
    ],
    providers: [DbContext, PlayerFetchIntervalsSeeder, SeederService],
    exports: [DbContext, SeederService],
})
export class InfrastructureModule { }
