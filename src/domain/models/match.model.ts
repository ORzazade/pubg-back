import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { MatchPlayer } from './matchPlayer.model';

@Entity()
export class Match {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    shard_id: string;

    @Column({ nullable: true })
    game_mode: string;

    @Column({ nullable: true })
    played_at: string;

    @Column({ nullable: true })
    map_name: string;

    @Column({ nullable: true })
    duration_seconds: number;

    @Column({ nullable: true })
    telemetry_url: string;
    
    // @OneToMany(type => MatchPlayer, matchPlayer => matchPlayer.match)
    // players: [MatchPlayer];

    @Column({ type: 'timestamp with time zone', default: () => "CURRENT_TIMESTAMP" })
    created_at: Date;

    @Column({ type: 'timestamp with time zone', nullable: true })
    updated_at: Date;
}
