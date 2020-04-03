import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class PlayerFetchInterval {
    @PrimaryColumn()
    name: string;

    @Column()
    fetchIntervalMs: number;

    setDetail = (name: string, fetchIntervalMs: number) => {
        this.name = name;
        this.fetchIntervalMs = fetchIntervalMs
    }
}
