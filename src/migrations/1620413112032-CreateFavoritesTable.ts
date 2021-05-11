import { MigrationInterface, QueryRunner, Table, getConnection } from "typeorm";

export class CreateFavoritesTable1620413112032 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'favorites',
            columns: [
                {
                    type: 'int',
                    name: 'id',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'userId',
                    type: 'int',
                    isNullable: true,
                },
                {
                    name: 'eletronicId',
                    type: 'int',

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
            foreignKeys: [
                {
                    name: 'userFavorites',
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                    columnNames: ['userId'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                {
                    name: 'favoritesEletronics',
                    referencedTableName: 'eletronics',
                    referencedColumnNames: ['id'],
                    columnNames: ['eletronicId'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },

            ],
        }));

        // await getConnection()
        //     .createQueryBuilder()
        //     .insert()
        //     .into('favorites')
        //     .values([
        //         { id: 2, userId: 1, eletronicId: 12, },
        //         { id: 12, userId: 1, eletronicId: 2, }
        //     ])
        //     .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('favorites')
    }

}
