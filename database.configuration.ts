/* eslint-disable prettier/prettier */
import 'dotenv/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
export class DatabaseConfiguration implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        return {
            type: "postgres",
            host: process.env.CONNECTOR as 'postgres',
            port: 5432,
            username: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            logging: true,
            synchronize: false,
            dropSchema: false,
            entities: ['src/**/*.entity.ts', 'dist/**/*.entity.js'],
        };
    }
}