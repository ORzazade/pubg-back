import { Module } from '@nestjs/common';
import { InfrastructureModule } from 'infrastructure/infrastructure.module';
import { SharedModule } from 'shared/shared.module';
import { GetPlayerQueryHandler } from './queryHandlers/player/getPlayer.queryHandler';

const queryHandlers = [
    GetPlayerQueryHandler,
];

@Module({
    imports: [
        SharedModule,
        InfrastructureModule,
    ],
    providers: [
        ...queryHandlers,
    ],
    exports: [],
})
export class AppModule {}
