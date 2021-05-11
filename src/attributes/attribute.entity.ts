import { Eletronic } from "src/eletronic/eletronic.entity";
import { Column, CreateDateColumn, ManyToOne, UpdateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Attribute {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    value: string;

    @Column()
    eletronicId: string;

    @Column()
    gameId: string;

    @ManyToOne(
        () => Eletronic,
        eletronics => eletronics.attributes,
        { cascade: false, persistence: false },
    )
    eletronic: Eletronic;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}
