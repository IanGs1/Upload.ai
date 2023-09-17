import { prisma } from "../lib/prisma";

import { FastifyInstance } from "fastify";

export async function getAllPrompts(app: FastifyInstance) {
    app.get('/prompts', async (request, reply) => {
        const prompts = await prisma.prompt.findMany();

        return prompts;
    })
}