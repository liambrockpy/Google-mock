// const request = require('supertest')
// const app = require('../app')

// describe(`GET / with query`, () => {
//     it('should respond 200 with all search results related to query', async () => {
//         request(app).get('/search').query({ value: "england" })
//             .expect(200)
//             .then(res => {
//                 expect(res.headers['content-type']).toMatch(/json/)
//                 expect(res.body).toHaveLength(10)
//                 expect(res.body[0].kind).toBeDefined()
//                 expect(res.body[0].title).toBeDefined()
//                 expect(JSON.stringify(res.body[0])).toMatch(/england/i)
//             })
//     })
// })

// describe(`GET /random with query`, () => {
//     it('should respond 200 with a random search result related to query', async () => {
//         request(app).get('/search/random').query({ value: "canada" })
//             .expect(200)
//             .then(res => {
//                 expect(res.headers['content-type']).toMatch(/json/)
//                 expect(typeof res.body).toEqual('object')
//                 expect(res.body.kind).toBeDefined()
//                 expect(res.body.title).toBeDefined()
//                 expect(JSON.stringify(res.body)).toMatch(/canada/i)
//             })
//     })
// })
