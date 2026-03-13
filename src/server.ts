import Fastify from 'fastify'
import cors from '@fastify/cors'

const app = Fastify({ logger: true })

const start = async () => {
    try {
        app.listen({ port: 3333})
    } catch(e) {
        process.exit(1)
    }
}

start()

