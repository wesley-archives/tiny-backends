// src/database/data-source.js

import 'reflect-metadata';
import { DataSource } from 'typeorm';
import 'dotenv/config';

export const AppDataSource = new DataSource({
    type: process.env.DATABASE_PROVIDER,
    url: process.env.DATABASE_URL,
    synchronize: true,
    logging: false,
    entities: [__dirname + '/../models/*.js'],
    migrations: [__dirname + '/../migrations/*.js'],
    subscribers: [],
});

const initializeDatabase = async () => {
    try {
        await AppDataSource.initialize();
        console.log('Database connection established successfully.');
    } catch (error) {
        console.error('Error during database connection initialization:', error);
    }
};

initializeDatabase();
