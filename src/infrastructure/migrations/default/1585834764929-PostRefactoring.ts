import {MigrationInterface, QueryRunner} from "typeorm";

export class PostRefactoring1585834764929 implements MigrationInterface {
    name = 'PostRefactoring1585834764929'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "player" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "shard_id" character varying NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "num_fetches" integer NOT NULL DEFAULT 1, "last_fetched_at" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_65edadc946a7faf4b638d5e8885" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_e85241260f14c54daeeb371616" ON "player" ("id", "shard_id") `, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_e85241260f14c54daeeb371616"`, undefined);
        await queryRunner.query(`DROP TABLE "player"`, undefined);
    }

}
