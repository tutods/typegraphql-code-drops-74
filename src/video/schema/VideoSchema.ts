import * as mongoose from 'mongoose';
import { VideoType } from 'types/Video';

const VideoSchema = new mongoose.Schema({
	description: String,
	title: String,
	category: String,
});

export default mongoose.model<VideoType>('Video', VideoSchema);
