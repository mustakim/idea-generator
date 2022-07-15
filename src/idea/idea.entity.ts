/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';


@Entity('idea')
export class IdeaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    created_at: Date;

    @ApiProperty({ example: 'Smart Room', description: 'Idea name here' })
    @Column('text') idea: string;

    @ApiProperty({
        example: 'Smart Room Consists some cool stufs',
        description: 'Idea description here',
    })
    @Column('text') description: string;
}