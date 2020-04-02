module.exports = {
   "type": "postgres",
   "host": process.env.POSTGRES_URL || "localhost",
   "port": 5432,
   "username": "postgres",
   "password": "Rzazade0",
   "database": "pgdb",
   "synchronize": false,
   "allowSyntheticDefaultImports": true,
   "esModuleInterop": true,
   "logging": false,
   "entities": ["./src/domain/models/*.model.ts"],
   "migrations": ["./src/infrastructure/migrations/default/*.ts"],
   "cli": {
      "entitiesDir": "./src/domain/models",
      "migrationsDir": "./src/infrastructure/migrations/default"
   }
};
