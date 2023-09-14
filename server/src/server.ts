import { fastify } from 'fastify';
import { fastifyCors } from '@fastify/cors';

import { getAllPrompts } from './routes/get-all-prompts';
import { uploadVideo } from './routes/upload-video';
import { createTranscription } from './routes/create-transcription';
import { generateAICompletition } from './routes/generate-ai-completition';

const app = fastify();

app.register(fastifyCors, {
    origin: '*'
})

app.register(getAllPrompts);
app.register(uploadVideo);
app.register(createTranscription);
app.register(generateAICompletition);

app.listen({
    port: 3333
}).then(() => console.log('Server HTTP on: http://localhost:3333'));