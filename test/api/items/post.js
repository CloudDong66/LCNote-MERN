const expoect = require('chai').expect;
const request = require('supertest');
const DB_URI = 'mongodb+srv://admin_1:admin_1@cluster0.bl1k9.mongodb.net/demoDB?retryWrites=true&w=majority';
const auth = require('../../../middleware/auth');

const Item = require('../../../routes/api/items');

// function connect() {
//     return new Promise((resolve, reject) => {
//         const Mockgoose = require('mockgoose').Mockgoose;
//         const mockgoose = new Mockgoose(mongoose);
//         mockgoose.prepareStorage()
//             .then(() => {
//                 mongoose.connect(DB_URI,
//                 { useNewUrlParser: true, useCreateIndex: true })
//                 .then((res, err) => {
//                 if (err) return PromiseRejectionEvent(err);
//                 resolve();
//             })
//     })
//     })
// }

// function close() {
//     return mongoose.disconnect();
// }

const userCredentials = {
    email: 'kk@yahoo.com',
    password: '123'
}

var authenticatendUser = request.agent(Item);

before(function(done){
    authenticatendUser
        .post('/')
        .send(userCredentials)
        .end(function(err, response){
            // expect(response.statusCode).to.equal(200);
            done();
        });
});


describe('POST /items', () => {
    // before((done) => {
    //     connect()
    //         .then(() => done())
    //         .catch((err) => done(err));
    // })

    // after((done) => {
    //     close()
    //         .then(() => done())
    //         .catch((err) => done(err));
    // })

    it('OK, creating a new item works', (done) => {
        request(Item).post('/',auth)
            .send({ name: "ITEM NAME"})
            .then((res) => {
                const body = res.body;

                expect(body).to.contain.property('_id');
                expect(body).to.contain.property('level');
                expect(body).to.contain.property('name');
                expect(body).to.contain.property('date');
                done();
            })
            .catch((err) => done(err));
    })
})
