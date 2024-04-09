import { ConfigProps } from "src/interfaces/config.interface";

export const config = (): ConfigProps => ({
    port: parseInt(process.env.PORT, 10) || 7164,
    api: {
        apiUrl: process.env.API_URL,
        httpTimeout: 1000,
    },
    mongodb: {
        database: {
            connectionString: process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost:27017',
            databaseName: process.env.NODE_ENV || 'local'
        }
    }
});