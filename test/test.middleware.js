const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const middToken = require('../middlewares/midd.validate.token');

chai.use(chaiHttp);
const url = 'http://127.0.0.1:3000';


describe('Given an invalid register user data', () => {
	it('when passing by register middleware should return 400 status', (done) => {
		chai.request(url)
			.post('/user')
			.send(
				{
                    names:"Eduardo",
                    last_names:"Maturino",
                    userName:"Lalo78",
                    email:"Eduardo@gmail.com",
                    password:"Lalo254",
                    phone_number:"5558109026",
                    active:1,
                    role:"user"
				}
			).end((err, res) => {
				expect(res).to.have.status(400);
				done();
			});
	});
});
/*login user, need token authentication  */
describe('Given an malformed login data', () => {
	it('when passing by login middleware should return 400 status', (done) => {
		chai.request(url)
			.post('/user/login')
			.send(
				{
					"email": "guilwlswe7845@gmail.comm",
					"password": "pass",
					"role": "user"
				}
			).end((err, res) => {
				expect(res).to.have.status(400);
				done();
			});
	});
});
