const request = require('supertest')
const app = require('../app')

describe(`GET /random`, () => {
    it('should respond 200 with a random search', async () => {
        request(app).get('/random')
            .expect(200)
            .then(res => {
                expect(res.headers['content-type'].toString()).toMatch(/json/)
                expect(typeof res.body).toEqual('object')
                expect(res.body.id).toBeDefined()
                expect(res.body.title).toBeDefined()
                expect(res.body.breadcrumb).toBeDefined()
                expect(res.body.desc).toBeDefined()
            })
    })
})

describe(`GET /random/canada`, () => {
    it('should respond 200 with a random search in canada', async () => {
        request(app).get('/random/canada')
            .expect(200)
            .then(res => {
                expect(res.headers['content-type'].toString()).toMatch(/json/)
                expect(typeof res.body).toEqual('object')
                expect(res.body.id).toBeDefined()
                expect(res.body.title).toBeDefined()
                expect(res.body.breadcrumb).toBeDefined()
                expect(res.body.desc).toBeDefined()
                expect(JSON.stringify(res.body)).toMatch(/canada/i)
            })
    })
})
