// import the modules to use
const sequelize = require('sequelize');
const Budgets = require ('../../db/db.budget.model');

module.exports.getAllBudgets = async ()=>{
    try {
        let result = await Budgets.findAll({
            where : {
                active : 1
            }
        });
        return result;
    } catch (error) {
        throw new Error (err+ 'problem in budgets models') 
    }
}