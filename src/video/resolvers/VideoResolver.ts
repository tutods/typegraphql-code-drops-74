import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import VideoSchema from 'video/schema/VideoSchema';
import { Video } from 'video/Video';

@InputType()
class VideoInput {
	@Field()
	description: String;

	@Field()
	title: String;

	@Field()
	category: String;
}

@Resolver()
class VideoResolver {
	@Mutation(() => Video)
	async addVideo(@Arg('videoInput') videoInput: VideoInput) {
		const video = await VideoSchema.create(videoInput);
		return video;
	}

	@Query(() => [Video])
	async videos() {
		const videos = VideoSchema.find();

		return videos;
	}
}

export { VideoResolver };
