import 'dotenv/config';
import { DatabaseEnvType, ServerEnvType } from 'types/EnvConfig';

// Variables from .env file
const { DB_HOST, DB_PORT, DB_NAME, SERVER_PORT } = process.env;

const serverEnv: ServerEnvType = {
	port: Number(SERVER_PORT) || 3333,
};

const databaseEnv: DatabaseEnvType = {
	host: DB_HOST || 'localhost',
	port: Number(DB_PORT) || 27017,
	name: DB_NAME || 'api',
};

export { serverEnv, databaseEnv };
