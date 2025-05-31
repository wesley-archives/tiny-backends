export const ormTemplateLibrary = {
    sequelize: [
        {
            src: 'orm/sequelize/index.js',
            dest: 'src/db/index.js',
        },
        {
            src: 'orm/sequelize/spell.js',
            dest: 'src/models/spell.js',
        }
    ],
    sequelizets: [
        {
            src: 'orm/sequelize/index.ts',
            dest: 'src/db/index.ts',
        },
        {
            src: 'orm/sequelize/spell.ts',
            dest: 'src/models/spell.ts',
        }
    ],
    prisma: [
        {
            src: 'orm/prisma/schema.prisma',
            dest: 'prisma/schema.prisma',
        }
    ],
    drizzle: [
        {
            src: 'orm/drizzle/drizzle.config.js',
            dest: 'drizzle.config.js',
        },
        {
            src: 'orm/drizzle/index.js',
            dest: 'src/db/index.js',
        },
        {
            src: 'orm/drizzle/schema.js',
            dest: 'src/db/schema.js',
        }
    ],
    drizzlets: [
        {
            src: 'orm/drizzle/drizzle.config.ts',
            dest: 'drizzle.config.ts',
        },
        {
            src: 'orm/drizzle/index.ts',
            dest: 'src/db/index.ts',
        },
        {
            src: 'orm/drizzle/schema.ts',
            dest: 'src/db/schema.ts',
        }
    ],
    typeorm: [
        {
            src: 'orm/typeorm/data-source.js',
            dest: 'src/data-source.js',
        },
        {
            src: 'orm/typeorm/spell.js',
            dest: 'src/models/spell.js',
        }
    ],
    typeormts: [
        {
            src: 'orm/typeorm/data-source.ts',
            dest: 'src/data-source.ts',
        },
        {
            src: 'orm/typeorm/spell.ts',
            dest: 'src/models/spell.ts',
        }
    ],
};
