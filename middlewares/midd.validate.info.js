const userValidation = require('../DTO/userValidation');
const Joi = require('joi');

const validateRegisterInfo = async (req, res, next) => {
	try {
		await Joi.attempt(req.body, userValidation.registerModel, 'invalid login data');
		return next();
	} catch (error) {
		console.log(error.message);
		res.status(400).send(error.message);
	}
};

const validateLoginInfo = async (req, res, next) => {
	try {
		await Joi.attempt(req.body, userValidation.loginModel, 'invalid login data');
		return next();
	} catch (error) {
		console.log(error.message);
		res.status(400).send(error.message);
	}
};

const changePassInfor = async (req, res, next) => {
	try {
		await Joi.attempt(req.body, userValidation.changePassInfor, 'invalid login data');
		return next();
	} catch (error) {
		console.log(error.message);
		res.status(400).send(error.message);
	}
};

module.exports = {
  validateRegisterInfo, validateLoginInfo, changePassInfor
};
