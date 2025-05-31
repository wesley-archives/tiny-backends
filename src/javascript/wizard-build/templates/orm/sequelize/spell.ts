// src/models/spell.ts

import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../db/index.ts';

interface SpellAttributes {
    id: number;
    name: string;
    incantation?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

interface SpellCreationAttributes extends Optional<SpellAttributes, 'id' | 'createdAt' | 'updatedAt'> { }

class Spell extends Model<SpellAttributes, SpellCreationAttributes> implements SpellAttributes {
    public id!: number;
    public name!: string;
    public incantation?: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Spell.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
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
    },
    {
        tableName: 'spells',
        sequelize,
        timestamps: true,
    }
);

const syncDatabase = async () => {
    try {
        await Spell.sync();
        console.log('Spell model synchronized successfully.');
    } catch (error) {
        console.error('Failed to synchronize Spell model:', error);
    }
};

syncDatabase();

export default Spell;
