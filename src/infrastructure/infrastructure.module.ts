import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { DbContext } from './dbContext';
import { PlayersRepository } from './repositories/player.repository';
import { UsersSeeder } from './seeders';
import { SeederService } from './services/seeder.service';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            name: 'default',
            host: process.env.POSTGRES_URL || 'localhost',
            username: 'postgres',
            password: 'Rzazade0',
            database: 'pubgheatmap',
            synchronize: false,
            logging: false,
            migrationsRun: true,
            entities: [path.join(__dirname, '..', 'domain/models/*.model.{ts,js}')],
            migrations: [path.join(__dirname, 'migrations/default/*.{ts,js}')],
        }),
        TypeOrmModule.forFeature(
            [
                PlayersRepository,

            ],
            'default',
        ),
    ],
    providers: [DbContext, UsersSeeder, SeederService],
    exports: [DbContext, SeederService],
})
export class InfrastructureModule { }
