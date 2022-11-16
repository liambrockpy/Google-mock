const request = require('supertest')
const app = require('../app')

describe(`GET /`, () => {
    it('should respond 200 with json', async () => {
        request(app).get('/search')
            .expect(200)
            .then(res => {
                expect(res.headers['content-type']).toMatch(/json/)
                expect(res.body).toEqual({ testMessage: 'Hello, World!' })
            })
    })
})
