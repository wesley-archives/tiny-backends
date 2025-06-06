// src/db/index.ts

import { Sequelize } from 'sequelize';
import 'dotenv/config';

const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
    dialect: process.env.DATABASE_PROVIDER as 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql',
    logging: false,
});

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

testConnection();

export { sequelize };
