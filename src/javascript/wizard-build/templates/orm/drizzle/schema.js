// src/db/schema.js

import { mysqlTable, serial, varchar, timestamp } from 'drizzle-orm/mysql-core';

export const usersTable = mysqlTable('spells', {
    id: serial().primaryKey(),
    name: varchar({ length: 255 }).notNull(),
    incantation: varchar('incantation', { length: 1024 }).nullable(),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow().onUpdateNow(),
});
