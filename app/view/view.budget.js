//import modules cors, midd, fetch
const constrolBugets = require('../controller/constrolBugets');
const middToken = require('../../middlewares/midd.validate.token');
const middCorsLimit =  require('../../middlewares/midd.cors.limit');

module.exports = async (app)=>{
    //create new budget
    app.post('/budget',middToken.validateToken, async (req, res) =>{
        try {
            console.log(req.body)
            let result = await constrolBugets.createBudget(req.body)
            res.json(result);
        } catch (error) {
            res.status(500).json('error in the request rutes budgets')
        }
     });
     //get quotes for each user
     app.get('/budget/:id_user', middToken.validateToken,/*middCorsLimit.corsOption,*/async (req, res) =>{
        let id_user = req.params.id_user
        try {
            let result = await constrolBugets.retrieveBudget(id_user);
			res.status(200).json(result);
        } catch (error) {
            res.status(500).json('error in the request rutes budgets')
        }
     });

     app.put('/delete', middToken.validateToken,/*middCorsLimit.corsOption,*/async (req, res) =>{
        try {
            let ok = await constrolBugets.deleteBudget(req.body);
			if(ok){
                res.status(200).json(ok);
            }
        } catch (error) {
            res.status(500).json('error in the request rutes budgets')
        }
     });

     app.post('/concept',middToken.validateToken,/*middCorsLimit.corsOption,*/async (req, res) =>{
        try {
            console.log("*******")
			let ok = await constrolBugets.createConcept(req.body);
			if(ok){
				res.status(200).json(ok);
			}
        } catch (error) { 
            res.status(500).json('error in the request views budgets')
        }
     });

     app.get('/concepts', middToken.validateToken,/*middCorsLimit.corsOption,*/async (req, res) =>{
        try {
			let ok = await constrolBugets.getAllConcepts();
			if(ok){
				res.status(200).json(ok);
			}
        } catch (error) { 
            res.status(500).json('error in the request views budgets')
        }
     });

     app.get('/budget/detail/:id_budget', middToken.validateToken,/*middCorsLimit.corsOption,*/async (req, res) =>{
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