import { MigrationInterface, QueryRunner, getConnection, Table } from "typeorm";

export class CreateGamesTable1620446657562 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'games',
            columns: [
                {
                    type: 'int',
                    name: 'id',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'price',
                    type: 'int'
                },
                {
                    name: 'description',
                    type: 'varchar'
                },
                {
                    name: 'image',
                    type: 'varchar'
                },
                {
                    type: 'datetime',
                    name: 'createdAt',
                    isNullable: false,
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    type: 'datetime',
                    name: 'updatedAt',
                    isNullable: false,
                    default: 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
                },
            ]
        }));

        await getConnection()
            .createQueryBuilder()
            .insert()
            .into('games')
            .values([
                {
                    id: 3, name: 'tv', description: 'sahushasa', price: 10000, image: 'asaas'
                },
                { id: 5, name: 'radio', description: 'sahushasa', price: 10000, image: 'asasasaas' }
            ])
            .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('games');
    }

}
