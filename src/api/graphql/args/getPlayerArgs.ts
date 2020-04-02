import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetPlayerArgs {
    @Field()
    name: string;

    @Field()
    shardId: string;

}
