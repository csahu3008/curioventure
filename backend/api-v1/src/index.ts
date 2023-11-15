
import fastify from 'fastify'
import fastifyRedis from '@fastify/redis';
import {blogsData} from './data.js'
const port = process.env.PORT ? parseInt(process.env.PORT) : 8080;

// var blogsData=require('./data.js')

const server = fastify()
server.register(fastifyRedis, { 
  host: '127.0.0.1', 
  password: '',
  port: 6379,
  family: 4  
})

server.get('/foo', (req, reply) => {
  const { redis } = server
  let query:any=req.query
  redis.get(query.key, (err, val) => {
    reply.send(err || val)
  })
})

server.post('/foo', (reqs, reply) => {
  const { redis } = server
  let req:any=reqs
  console.log("BODY",req.body)
  let blogData=JSON.stringify(blogsData)
  redis.set(req.body.key, blogData, (err) => {
    reply.send(err || { status: 'ok' })
  })
})

server.get('/', async (request, reply) => {
  return 'Hello there! 👋 From Version 1'
})

server.get('/posts', async (request, reply) => {
  return blogsData
});

server.get('/posts/:id', async (request:any, reply) => {
  const postId = parseInt(request.params.id);
  console.log("request",request.params)
  const post = blogsData.find(p => p.id === postId);

  if (!post) {
      return reply.status(404).send({ error: 'Post not found' });
    }
  
return post
});

server.listen({port:port,host:'0.0.0.0'}, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Started server at ${address}`)
})