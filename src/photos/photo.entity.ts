import { Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn } from 'typeorm';

@Entity()
export class Photo {
  @ObjectIdColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  filename: string;

  @Column()
  views: number;
}