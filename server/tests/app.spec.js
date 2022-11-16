const request = require('supertest')
const app = require('../app')

describe(`GET / with query`, () => {
    // it('should respond 200 with json', async () => {
    //     request(app).get('/search')
    //         .expect(200)
    //         .then(res => {
    //             expect(res.headers['content-type']).toMatch(/json/)
    //             expect(res.body).toEqual({ testMessage: 'Hello, World!' })
    //         })
    // })

    it.todo('should respond 200 with all search results related to query')
})

describe(`GET /random with query`, () => {
    it.todo('should respond 200 with a random search result related to query')
})
