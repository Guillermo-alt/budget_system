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

module.exports.retrieveBudget = async (id_user) =>{
    try {
        const result = await modelBudgets.retrieveBudget(id_user);
        return result;
    } catch (error) {
        throw new Error ('budgets controller error')      
    }
}


module.exports.deleteBudget = async (param) =>{
    try {
        const result = await modelBudgets.deleteBudget(param);
        return result;
    } catch (error) {
        throw new Error ('budgets controller error')      
    }
}

//create new concept
module.exports.createConcept = async (concept) =>{
    try {
        const result = await modelBudgets.createConcept(concept);
        return result;
    } catch (error) {
        throw new Error ('budgets controller error')      
    }
}
//get all concepts
module.exports.getAllConcepts = async () =>{
    try {
        const result = await modelBudgets.getAllConcepts();
        return result;
    } catch (error) {
        throw new Error ('budgets controller error')      
    }
}
//obtenemos resultados detallado de un presupuesto
module.exports.getBudgetDetails = async (budget) =>{
    try {
        const result = await modelBudgets.getBudgetDetails(budget);
        return result;
    } catch (error) {
        throw new Error ('budgets controller error')      
    }
}