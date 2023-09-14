import { FastifyInstance } from "fastify";

import { z } from 'zod';

import { prisma } from "../lib/prisma";

export async function createTranscription(app: FastifyInstance) {
    app.post('/videos/:videoId/transcription', async (request, reply) => {
        const paramsSchema = z.object({
            videoId: z.string().uuid()
        })

        const { videoId } = paramsSchema.parse(request.params);

        const bodySchema = z.object({
            prompt: z.string()
        });

        const { prompt } = bodySchema.parse(request.body);

        return reply.status(201).send({
            videoId,
            prompt
        })
    })
}