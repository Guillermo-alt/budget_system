// import the modules to use
const Budget = require('../../db/db.budget.model');
const Period = require('../../db/db.period.model');
const Concept = require('../../db/db.concept.model');
const Income = require('../../db/db.income.model');
const DirectCost = require('../../db/db.directCost.model');
const AdminExpenses = require('../../db/db.adminexpenses.model');
const Resources = require('../../db/db.resources.model');

module.exports.createBudget = async (budget)=>{

      //creamos budget y guardamos id budget
      const budgetC = await Budget.create({ proyect: budget.proyect, version: budget.version, active:1, id_user:budget.id_user });
        for (let p in budget.periods) { //recorre meses
         
                let periodsC = await Period.create({ date: budget.periods[p].date, income: budget.periods[p].income, id_budget:budgetC.id_budget });               

            for (let i in budget.periods[p].incomes) {
                //creamos icomes y agregamos periodos
            
                    let incomeC = await Income.create({ value: budget.periods[p].incomes[i].value, id_date: periodsC.id_date , id_concept:'2' });
        
            }
            for (let i in budget.periods[p].direct_cost) {
              
                    let costD = await DirectCost.create({ value: budget.periods[p].direct_cost[i].value, id_date: periodsC.id_date , id_concept:'2' });
               
            }
            for (let i in budget.periods[p].admin_expenses) {
              
                    let expensesC = await AdminExpenses.create({ value: budget.periods[p].admin_expenses[i].value, id_date:periodsC.id_date , id_concept:'2' });
     
            }
            for (let i in budget.periods[p].resources) {
              
                    let resour = await Resources.create({ cost: budget.periods[p].resources[i].cost,percentage: budget.periods[p].resources[i].percentage , id_date:periodsC.id_date }); 
      
            }
        }
        return budgetC;
}


module.exports.retrieveBudget = async (id_user) => {
	try {
		let budget = await Budget.findAll({
                        where: {
                        id_user:id_user,
                        active: 1
		        }
		});
       
		if (budget != null) {
			return budget;
		}
		throw new Error('Budget no longer exists or is inactive');
	} catch (error) {
        console.log(error)
		throw error;
	}
};

module.exports.deleteBudget = async (param) => {
	try {
		let budget = await Budget.update({
			active: 0,
		}, {
			where: {
				id_user: param.id_user,
                                id_budget: param.id_budget
			}
		});
       
		if (budget != null) {
			return budget;
			
		}
		throw new Error('Budget no longer exists or is inactive');
	} catch (error) {
        console.log(error)
		throw error;
	}
};