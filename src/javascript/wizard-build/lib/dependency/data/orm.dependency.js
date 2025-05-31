export const ormDependencyLibrary = {
    sequelize: {
        dependencies: ['sequelize'],
        devDependencies: [],
    },
    sequelizets: {
        dependencies: ['sequelize'],
        devDependencies: ['@types/sequelize'],
    },
    prisma: {
        dependencies: ['@prisma/client'],
        devDependencies: ['prisma'],
    },
    drizzle: {
        dependencies: ['drizzle-orm'],
        devDependencies: ['drizzle-kit'],
    },
    drizzlets: {
        dependencies: ['drizzle-orm'],
        devDependencies: ['drizzle-kit', 'tsx'],
    },
    typeorm: {
        dependencies: ['typeorm', 'reflect-metadata'],
        devDependencies: [],
    },
    typeormts: {
        dependencies: ['typeorm', 'reflect-metadata'],
        devDependencies: [],
    },
};
