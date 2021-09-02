//import modelues
const Users = require('../../db/db.users.model');
const bcrypt = require('bcrypt');

const SALT =10;

module.exports.retrieveUser = async (user) => {
	try {
		let User = await Users.findOne({
			where: {
                email:user.email,
                active: 1
			}
		});
       
		if (User != null &&  bcrypt.compareSync(user.password, User.password)) {
			return User.dataValues;
		}
		throw new Error('User no longer exists or is inactive');
	} catch (error) {
        console.log(error)
		throw error;
	}
};

module.exports.UserExists = async (user) => {
	try {
		let exists = await Users.findOne({
			where: {
				email: user.email,
                role:  user.role,
				active: 1
				
			}

		});
		if (exists != null &&  bcrypt.compareSync(user.password, exists.password)) {
		
			return true;
		}
		return false;
	} catch (error) {
		throw error;
	}
};


module.exports.updatePassword = async (user) => {
	try {
		let exists = await Users.findOne({
			where: {
				id_user: user.id_user,
			}
		});
		if (exists != null &&  bcrypt.compareSync(user.currentPass, exists.password)) {
			try {
			let User = await Users.update({
				password: bcrypt.hashSync(user.newPass, SALT),
			}, {
				where: {
					id_user: user.id_user
				}
			});
			if (User != null) {
				return User={
					"id_user": user.id_user,
					"response":"password changed",
					"status":1
				}
			}else{
				return User =
				{
					"id_user": user.id_user,
					"response":"User no longer exists (inactive) or Incorrect password",
					"status":0
				}
			}
		} catch (error) {
			throw new Error('User no longer exists (inactive) or Incorrect password ');	
		}
		}else{
			return User =
				{
					"id_user": user.id_user,
					"response":"User no longer exists (inactive) or Incorrect password"
				}
		}
	} catch (error) {
        throw new Error('User no longer exists (inactive) or Incorrect password');
	}
}

//create new user
module.exports.createUser = async (user) => {
	try {
		let User = await Users.create({
			names:user.names,
			last_names:user.last_names,
			email:user.email,
			userName:user.userName,
			password:bcrypt.hashSync(user.password, SALT),
			phone_number:user.phone_number,
			active:user.active,
			role:user.role
		});
       
		if (User != null) {
			return User;
			
		}
		throw new Error('User no longer exists or is inactive');
	} catch (error) {
        console.log(error)
		throw error;
	}
}