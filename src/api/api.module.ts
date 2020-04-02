import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PlayerResolver } from './graphql/resolvers/player.resolver';
import { SharedModule } from 'shared/shared.module';
import { AppModule } from 'application/app.module';

@Module({
    imports: [
        SharedModule,
        GraphQLModule.forRoot({
            autoSchemaFile: 'schema.gql',
        }),
        AppModule,
    ],
  
    providers: [ PlayerResolver],
})
export class ApiModule {}
