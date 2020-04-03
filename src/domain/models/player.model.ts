import { Column, Entity, Index, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { MatchPlayer } from './matchPlayer.model';

@Entity()
@Index(['id', 'shard_id'], { unique: true })
export class Player {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    shard_id: string;

    @Column()
    name: string;

    @Column({ type: 'timestamp with time zone', default: () => "CURRENT_TIMESTAMP" })
    created_at: Date;

    @Column({ default: 1 })
    num_fetches: number;

    // @OneToMany(type => MatchPlayer, matchPlayer => matchPlayer.player)
    // matches?: [MatchPlayer];

    @Column({ type: 'timestamp with time zone' })
    last_fetched_at: Date;
}
