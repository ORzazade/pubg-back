import {MigrationInterface, QueryRunner} from "typeorm";

export class AddInitialEntities1585912165298 implements MigrationInterface {
    name = 'AddInitialEntities1585912165298'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "match" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "shard_id" character varying NOT NULL, "game_mode" character varying, "played_at" character varying, "map_name" character varying, "duration_seconds" integer, "telemetry_url" character varying, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updated_at" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_92b6c3a6631dd5b24a67c69f69d" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "match_player" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "matchId" character varying NOT NULL, "playerId" character varying NOT NULL, "roster_id" character varying, "stats" jsonb NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "PK_6101d598aa861f2eaf6e1b37db2" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_d6ff1b0adb5321d143f007acc3" ON "match_player" ("matchId", "playerId") `, undefined);
        await queryRunner.query(`CREATE TABLE "players" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "shard_id" character varying NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "num_fetches" integer NOT NULL DEFAULT 1, "last_fetched_at" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_65edadc946a7faf4b638d5e8885" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_e85241260f14c54daeeb371616" ON "player" ("id", "shard_id") `, undefined);
        await queryRunner.query(`CREATE TABLE "player_fetch_interval" ("name" character varying NOT NULL, "fetchIntervalMs" integer NOT NULL, CONSTRAINT "PK_d54e3bcb49ffa3b5955662aa1ba" PRIMARY KEY ("name"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "player_fetch_interval"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_e85241260f14c54daeeb371616"`, undefined);
        await queryRunner.query(`DROP TABLE "players"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_d6ff1b0adb5321d143f007acc3"`, undefined);
        await queryRunner.query(`DROP TABLE "match_player"`, undefined);
        await queryRunner.query(`DROP TABLE "match"`, undefined);
    }

}
