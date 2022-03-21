import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1647777026887 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "products",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        
                    },
                    {
                        name: "id_creator",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "name_product",
                        type: "varchar",
                    },
                    {
                        name: "obs_product",
                        type: "varchar",
                    },
                    {
                        name: "quantity",
                        type: "number",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                        
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"

                    },
                    
                    
                ],
                foreignKeys: [
                    {
                        name: "FKUserCreator",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_creator"],
                        onDelete: "SET NULL",
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products")
    }

}
