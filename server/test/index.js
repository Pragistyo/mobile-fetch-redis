const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const app = require('../app.js');

chai.use(chaiHttp)


describe('get all Article data endpoint', () => {
    it('should get all data', (done) => {
        chai.request(app)
            .get('/tractive-test')
            .end((err, response) => {
                response.status.should.be.equal(200)
                response.body.should.be.an('object')
                response.body.result.should.be.an('array')
                done()
            })
    })
})