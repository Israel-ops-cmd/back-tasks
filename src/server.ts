import Fastify from 'fastify'
import cors from '@fastify/cors'
import { routes } from './routes.js'

const app = Fastify({ logger: true })

const start = async () => {

    app.register(cors, {
        origin: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELTETE', 'OPTIONS']
    })

    await app.register(routes)
    
    try {
        app.listen({ port: 3333})
    } catch(e) {
        process.exit(1)
    }
}

start()

