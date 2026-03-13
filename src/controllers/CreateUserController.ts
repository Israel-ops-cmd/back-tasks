import type { FastifyRequest, FastifyReply } from "fastify"
import { CreateUserService } from "../services/CreateUserService.js"

class CreateUserController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        try {
            const { name, email, password } = request.body as { name: string, email: string, password: string }

            const userService = new CreateUserService()
            const user = await userService.execute({ name, email, password })

            reply.send(user)
        } catch(err: any) {
            return reply.code(400).send({ error: err.message})
        }
        
    }
}

export { CreateUserController }