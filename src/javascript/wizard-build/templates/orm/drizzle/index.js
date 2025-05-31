// src/db/index.js

import { drizzle } from "drizzle-orm/connect";
import 'dotenv/config';

async function main() {
    const db = await drizzle(process.env.DATABASE_PROVIDER, process.env.DATABASE_URL);
}

main();