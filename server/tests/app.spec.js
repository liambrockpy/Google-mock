const request = require('supertest')
const app = require('../app')

describe(`GET /`, () => {
    it('should respond 200 with all search results', async () => {
        request(app).get('/search')
            .expect(200)
            .then(res => {
                expect(res.body).toBeDefined()
            })
    })
})
