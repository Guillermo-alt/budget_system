//import the modules to use
const modelBudgets = require ('../model/modelBudgets');

module.exports.getAllBudgets = async () =>{
    try {
        const result = await modelBudgets.getAllBudgets();
        return result;
    } catch (error) {
        throw new Error ('budgets controller error')      
    }
}