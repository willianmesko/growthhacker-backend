import { MigrationInterface, QueryRunner, Table, getConnection } from "typeorm";

export class CreateUserTable1620411971855 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
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
                    name: 'email',
                    type: 'varchar'
                },
                {
                    name: 'password',
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
            .into('users')
            .values([
                { id: 1, name: 'tv', email: 'sahushasa', password: 'asaas' },
                { id: 12, name: 'radio', email: 'sahushasa', password: 'asasasaas' }
            ])
            .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
