// drizzle.config.ts

import { defineConfig } from 'drizzle-kit';
import 'dotenv/config';

export default defineConfig({
    out: './drizzle',
    schema: './src/db/schema.ts',
    dialect: process.env.DATABASE_PROVIDER! as 'sqlite' | 'mariadb' | 'mysql' | 'postgres',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
});
