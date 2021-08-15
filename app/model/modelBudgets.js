// import the modules to use
const sequelize = require('sequelize');
const Budget = require('../../db/db.budget.model');
const Period = require('../../db/db.period.model');
const Concept = require('../../db/db.concept.model');
const Income = require('../../db/db.income.model');
const DirectCost = require('../../db/db.directCost.model');
const AdminExpenses = require('../../db/db.adminexpenses.model');
const Resources = require('../../db/db.resources.model');

module.exports.createBudget = async (budget)=>{
    try {
      //creamos budget y guardamos id budget
      const budgetC = await Budget.create({ proyect: budget.proyect, version: budget.version, active:1 });
        for (let p in budget.periods) { //recorre meses
            //crea periodo
            try {
                let periodsC = await Period.create({ date: budget.periods[p].date, income: budget.periods[p].income, id_budget:budgetC.id_budget });
            } catch (error) {
                throw new Error ('budgets model error')    
            }
            for (let i in budget.periods[p].incomes) {
                //creamos icomes y agregamos periodos
                try {
                    let incomeC = await Income.create({ value: budget.periods[p].incomes[i].value, id_date: periodsC.id_date , id_concept:'2' });
                } catch (error) {
                    throw new Error ('budgets model error')    
                }   
            }
            for (let i in budget.periods[p].direct_cost) {
                try {
                    let costD = await DirectCost.create({ value: budget.periods[p].direct_cost[i].value, id_date: periodsC.id_date , id_concept:'2' });
                } catch (error) {
                    throw new Error ('budgets model error')    
                }       
            }
            for (let i in budget.periods[p].admin_expenses) {
                try {
                    let expensesC = await AdminExpenses.create({ value: budget.periods[p].admin_expenses[i].value, id_date:periodsC.id_date , id_concept:'2' });
                } catch (error) {
                    throw new Error ('budgets model error')      
                }      
            }
            for (let i in budget.periods[p].resources) {
                try {
                    let resour = await Resources.create({ cost: budget.periods[p].resources[i].cost,percentage: budget.periods[p].resources[i].percentage , id_date:periodsC.id_date }); 
                } catch (error) {
                    throw new Error ('budgets model error')     
                } 
            }
        }
        return 0;

    } catch (error) {
        throw new Error (err+ 'problem in budgets models') 
    }
}