import {Entity,Column,BaseEntity,PrimaryGeneratedColumn, BeforeInsert} from 'typeorm';
import bcrypt from 'bcrypt';

@Entity('usr-tbl')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({length: 255,nullable: false})
    username: string;

    @Column({nullable: false})
    password: string;

    @BeforeInsert()
    async hashPassword() {
        if (this.password) {
            this.password = await bcrypt.hash(this.password, 10)
        }   
    }
}
