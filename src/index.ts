
import fastify from 'fastify'
import {blogsData} from './data.js'
// var blogsData=require('./data.js')
const server = fastify()

server.get('/', async (request, reply) => {
  return 'Hello there! 👋'
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

server.listen({port:8080}, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Started server at ${address}`)
})