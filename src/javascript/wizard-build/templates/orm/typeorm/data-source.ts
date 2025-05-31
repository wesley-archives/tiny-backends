// src/database/data-source.ts

import "reflect-metadata";
import { DataSource } from "typeorm";
import "dotenv/config";

export const AppDataSource = new DataSource({
    type: process.env.DATABASE_PROVIDER as any,
    url: process.env.DATABASE_URL,
    synchronize: true,
    logging: false,
    entities: [__dirname + "/../models/*.ts"],
    migrations: [__dirname + "/../migrations/*.ts"],
    subscribers: [],
});

const initializeDatabase = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Database connection established successfully.");
    } catch (error) {
        console.error("Error during database connection initialization:", error);
    }
};

initializeDatabase();
