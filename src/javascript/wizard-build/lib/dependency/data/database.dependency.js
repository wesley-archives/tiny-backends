export const databaseDependencyLibrary = {
    sqlite: {
        dependencies: ['sqlite3'],
        devDependencies: [],
    },
    mariadb: {
        dependencies: ['mariadb'],
        devDependencies: [],
    },
    mysql: {
        dependencies: ['mysql2'],
        devDependencies: [],
    },
    postgresql: {
        dependencies: ['pg'],
        devDependencies: [],
    },
    postgresqlts: {
        dependencies: ['pg'],
        devDependencies: ['@types/pg'],
    },
    mongodb: {
        dependencies: ['mongodb'],
        devDependencies: [],
    },
};
