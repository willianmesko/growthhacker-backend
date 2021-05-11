import { Eletronic } from "src/eletronic/eletronic.entity";
import { User } from "src/user/user.entity";
import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";

@Entity({ name: 'favorites' })
export class Favorites {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;


    @Column()
    eletronicId: number;

    @ManyToOne(
        () => User,
        user => user.favorites,
        { cascade: false, persistence: false },
    )
    user: User;

    @OneToMany(
        () => Eletronic,
        eletronic => eletronic.favorites,

    )
    eletronic: Eletronic[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}
