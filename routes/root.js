export default async function (server, opts) {
  server.get('/', async function (request, reply) {
    return { root: true }
  })
}
