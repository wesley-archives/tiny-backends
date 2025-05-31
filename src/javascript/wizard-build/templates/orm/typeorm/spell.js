// src/models/spell.js

import "reflect-metadata";
import { EntitySchema } from 'typeorm';

module.exports = new EntitySchema({
    name: 'Spell',
    tableName: 'spells',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        name: {
            type: String,
            nullable: false,
        },
        incantation: {
            type: 'text',
            nullable: true,
        },
        createdAt: {
            type: 'timestamp',
            default: () => 'CURRENT_TIMESTAMP',
        },
        updatedAt: {
            type: 'timestamp',
            default: () => 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
        },
    },
});
