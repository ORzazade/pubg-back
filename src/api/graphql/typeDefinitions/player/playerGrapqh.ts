import GraphQLJSON from 'graphql-type-json';
import { Field, ObjectType } from '@nestjs/graphql';
import { PlayerMatchGraphql } from './playerMatchGraphql';

@ObjectType()
export class PlayerGrapqhql {
    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    lastFetchedAt: string;

    @Field()
    rateLimitReset: number;

    @Field()
    rateLimitAhead: number;

    @Field()
    rateLimitPlayerKey: string;

    @Field(type => [PlayerMatchGraphql], { nullable: true })
    matches: [PlayerMatchGraphql];
}
