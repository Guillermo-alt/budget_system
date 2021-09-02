//import modules cors, midd, fetch
const constrolBugets = require('../controller/constrolBugets');
const middlewares = require('../../middlewares/middlewares');

module.exports = async (app)=>{


    //create new budget
    app.post('/budget',middlewares.validateToken, async (req, res) =>{
        try {
            let result = await constrolBugets.createBudget(req.body)
            res.json(result);
        } catch (error) {
            res.status(500).json('error in the request rutes budgets')
        }
     });
     //get quotes for each user
     app.get('/budget/:id_user', middlewares.validateToken,/*middlewares.corsOption,*/async (req, res) =>{
        let id_user = req.params.id_user
        try {
            let result = await constrolBugets.retrieveBudget(id_user);
			res.status(200).json(result);
        } catch (error) {
            res.status(500).json('error in the request rutes budgets')
        }
     });

     app.put('/delete', middlewares.validateToken,/*middlewares.corsOption,*/async (req, res) =>{
        try {
            let ok = await constrolBugets.deleteBudget(req.body);
			if(ok){
                res.status(200).json(ok);
            }
        } catch (error) {
            res.status(500).json('error in the request rutes budgets')
        }
     });

     app.post('/concept', middlewares.validateToken,/*middlewares.corsOption,*/async (req, res) =>{
        try {
			let ok = await constrolBugets.createConcept(req.body);
			if(ok){
				res.status(200).json(ok);
			}
        } catch (error) { 
            res.status(500).json('error in the request views budgets')
        }
     });

     app.get('/concepts', middlewares.validateToken,/*middlewares.corsOption,*/async (req, res) =>{
        try {
			let ok = await constrolBugets.getAllConcepts();
			if(ok){
				res.status(200).json(ok);
			}
        } catch (error) { 
            res.status(500).json('error in the request views budgets')
        }
     });

     app.get('/budget/detail/:id_budget', middlewares.validateToken,/*middlewares.corsOption,*/async (req, res) =>{
        try {
			let ok = await constrolBugets.getBudgetDetails(req.params.id_budget);
			if(ok){
				res.status(200).json(ok);
			}
        } catch (error) { 
            res.status(500).json('error in the request views budgets')
        }
     });

}