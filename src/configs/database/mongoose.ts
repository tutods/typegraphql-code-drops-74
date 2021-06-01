import { databaseEnv } from 'configs/envConfig';
import * as mongoose from 'mongoose';

const connectionUrl = `mongodb://${databaseEnv.host}:${databaseEnv.port}/${databaseEnv.name}`;

mongoose
	.connect(connectionUrl, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log('Database connected with success 💾');
	})
	.catch((err: Error) => {
		console.log(`Error: ${err.message}`);
	});
