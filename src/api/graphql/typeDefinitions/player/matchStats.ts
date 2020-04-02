import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MatchStatsGraphql {
    @Field()
    id: string;

    @Field()
    kills: number;

    @Field()
    winPlace: number;
}
