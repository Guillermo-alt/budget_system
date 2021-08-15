//import the modules to use
const modelBudgets = require ('../model/modelBudgets');

module.exports.createBudget = async (budget) =>{
    try {
        const result = await modelBudgets.createBudget(budget);
        return result;
    } catch (error) {
        throw new Error ('budgets controller error')      
    }
}