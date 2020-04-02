import { Field, ObjectType } from '@nestjs/graphql';
import { MatchStatsGraphql } from './matchStats';

@ObjectType()
export class PlayerMatchGraphql {
    @Field()
    id: string;

    @Field()
    shardId: string;

    @Field()
    gameMode: string;

    @Field()
    playedAt: string;

    @Field()
    mapName: string;

    @Field()
    durationSeconds: number;

    @Field()
    telemetryUrl: string;

    @Field(type => MatchStatsGraphql)
    delivery: MatchStatsGraphql;
}
