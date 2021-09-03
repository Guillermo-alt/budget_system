//import modules cors, midd, fetch
const controlUsers = require('../controller/controlUsers');
const middToken = require('../../middlewares/midd.validate.token');
const middInfo = require('../../middlewares/midd.validate.info');
const middCorsLimit =  require('../../middlewares/midd.cors.limit');

module.exports = async (app)=>{


    //login user
    app.post('/user/login', middInfo.validateLoginInfo, /*middCorsLimit.corsOption,*/async (req, res) => {
		let user = req.body;
		try {
            console.log(req.body)
			const ok = await controlUsers.validateUser(user);
			if (ok) {
				let sessionToken = await controlUsers.generateUserToken(user);
				res.json(sessionToken);
			} else
				throw new Error("Invalid user, if deactivated please contact adminsitrator to reactivate it");
		} catch (error) {
			console.log('error: ' + error.message);
			res.status(400).send(error.message);
		}
	});

	//get user data
	app.get('/user', middToken.validateToken,/*middCorsLimit.corsOption,*/async (req, res) =>{
        try {
			let user = await controlUsers.retrieveUser(req.params.user);
			res.status(200).json(user);
        } catch (error) {
            res.status(500).json('error in the request views user or authentication fails')
        }
     });

	 app.put('/user/pass', middToken.validateToken,middInfo.changePassInfor,/*middCorsLimit.corsOption,*/async (req, res) =>{
        try {
			let ok = await controlUsers.updatePassword(req.body);
				res.status(200).json(ok);	
        } catch (error) { 
            res.status(500).json('error in the request views user')
        }
     });
	//register-create user
	 app.post('/user',middInfo.validateRegisterInfo ,/*middCorsLimit.corsOption,*/async (req, res) =>{
        try {
			let user = await controlUsers.createUser(req.body);
			res.status(200).json(user);
        } catch (error) {
            res.status(500).json('error in the request views user')
        }
     });
}