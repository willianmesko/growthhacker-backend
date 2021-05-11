import { Attribute } from "src/attributes/attribute.entity";
import { Favorites } from "src/favorites/favorites.entity";
import { Column, OneToMany, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, ManyToMany } from "typeorm";

@Entity({ name: 'eletronics' })
export class Eletronic {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    image: string;

    @Column()
    description: string;

    @OneToMany(
        () => Attribute,
        { persistence: false, cascade: true },
    )
    attributes: Attribute[];

    @ManyToMany(
        () => Favorites,
        favorites => favorites.eletronic,

    )
    favorites: Favorites;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}
