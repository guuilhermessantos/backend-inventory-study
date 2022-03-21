import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne, UpdateDateColumn} from "typeorm"
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("products")
class Products {

    @PrimaryColumn()
    readonly id: string

    @Column()
    id_creator: string;
    @JoinColumn({name: "id_creator"})
    @ManyToOne(() => User)
    idCreator: User


    @Column()
    quantity: number;


    @Column()
    name_product: string;

    @Column()
    obs_product: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }

}

export { Products }