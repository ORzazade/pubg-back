import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { GetPlayerQuery } from 'application.contract/queries/player/getPlayer.query';
import { GetPlayerArgs } from '../args/getPlayerArgs';
import { PlayerGrapqhql } from '../typeDefinitions/player/playerGrapqh';

@Resolver()
export class PlayerResolver {
    constructor(private readonly queryBus: QueryBus) {}

    @Query(returns => PlayerGrapqhql)
    async playerMatches(@Args() args: GetPlayerArgs) {
        const restaurant = await this.queryBus.execute(new GetPlayerQuery(args.shardId, args.name));
        return restaurant;
    }
}
