export const databaseTemplateLibrary = {
    sqlite: [
    ],
    mariadb: [
        {
            src: 'database/mariadb/docker-compose.yml',
            dest: 'docker-compose.yml',
        },
    ],
    mysql: [
        {
            src: 'database/mysql/docker-compose.yml',
            dest: 'docker-compose.yml',
        },
    ],
    postgresql: [
        {
            src: 'database/postgresql/docker-compose.yml',
            dest: 'docker-compose.yml',
        },
    ],
    postgresqlts: [
        {
            src: 'database/postgresql/docker-compose.yml',
            dest: 'docker-compose.yml',
        },
    ],
    mongodb: [
        {
            src: 'database/mongodb/docker-compose.yml',
            dest: 'docker-compose.yml',
        },
    ],
};
