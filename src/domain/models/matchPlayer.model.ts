import { Column, Entity, Index, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Player } from './player.model';
import { Match } from './match.model';

@Entity()
@Index(['matchId', 'playerId'], { unique: true })
export class MatchPlayer {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    matchId: string;

    @Column()
    playerId: string;

    @Column({ nullable: true })
    roster_id: string;

    @Column({ type: 'jsonb' })
    stats: any;

    @Column({ type: 'timestamp with time zone', default: () => "CURRENT_TIMESTAMP" })
    created_at: Date;

    // @ManyToOne(type => Player, play => play.matches)
    // player: Player;

    // @ManyToOne(type => Match, match => match.players)
    // match: Match;
}
