import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPlayerQuery } from '../../../application.contract/queries/player/getPlayer.query';
import { Player } from '../../../domain/models/player.model';
import { BaseQueryHandler } from '../base.queryHandler';

@QueryHandler(GetPlayerQuery)
export class GetPlayerQueryHandler extends BaseQueryHandler
    implements IQueryHandler<GetPlayerQuery, Player[]> {
    async execute(query: GetPlayerQuery): Promise<Player[]> {
        return await this.dbContext.Players.find();
    }
}
