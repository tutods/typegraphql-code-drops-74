import { ApolloServer } from 'apollo-server';
import 'configs/database/mongoose';
import { serverEnv } from 'configs/envConfig';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { VideoResolver } from 'video/resolvers/VideoResolver';

const bootstrap = async () => {
	const schema = await buildSchema({
		resolvers: [VideoResolver]
	});

	const server = new ApolloServer({ schema });

	server.listen(
		{ port: serverEnv.port },
		console.log(`Server is running on port ${serverEnv.port} 🤟`)
	);
};

bootstrap();
