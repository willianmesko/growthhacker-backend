import { MigrationInterface, QueryRunner, getConnection, Table } from "typeorm";

export class CreateEletronicsTable1620446689871 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'eletronics',
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

            ],



        }));

        await getConnection()
            .createQueryBuilder()
            .insert()
            .into('eletronics')
            .values([
                { id: 2, name: 'tv', description: 'sahushasa', price: 1000, image: 'asaas' },
                { id: 12, name: 'radio', description: 'sahushasa', price: 'Invoice payment', image: 'asasasaas' }
            ])
            .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('eletronics');
    }

}
