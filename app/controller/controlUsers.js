const modelUsers = require ('../model/modelUsers');
const jwt = require('jsonwebtoken');

module.exports.retrieveUser = async (user) =>{
    try {
        const result = await modelUsers.retrieveUser(user);
        return result;
    } catch (error) {
        console.log(error)
        throw  Error (error)      
    }
}

module.exports.updatePassword = async (user) =>{
    try {
        const result = await modelUsers.updatePassword(user);
        return result;
    } catch (error) {
        console.log(error)
        throw  Error (error)      
    }
}

module.exports.validateUser = async (usr) => {
	try {
		const ok = await modelUsers.UserExists(usr);
		if (ok) {
			return true;
		} else {
			return false;
		}
	} catch (error) {
		throw error;
	}
};

module.exports.generateUserToken = async (user) => {
	const token = jwt.sign(
		{ data: user },
		process.env.SECRET_KEY
	);
	return token;
};

module.exports.verifyUserToken = async (token) => {
	try {
		const decodedUser = jwt.verify(token, process.env.SECRET_KEY);
		if (decodedUser) {
			return decodedUser;
		}
	} catch (error) {
		throw error;
	}
};