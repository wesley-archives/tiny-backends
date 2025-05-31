// src/models/spell.js

import { DataTypes } from 'sequelize';
import { sequelize } from '../db/index.ts';

const Spell = sequelize.define('Spell', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    incantation: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW,
    },
}, {
    tableName: 'spells',
    timestamps: true,
});

const syncDatabase = async () => {
    try {
        await Spell.sync();
        console.log('Spell model synchronized successfully.');
    } catch (error) {
        console.error('Failed to synchronize Spell model:', error);
    }
};

syncDatabase();

module.exports = Spell;
