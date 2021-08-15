//import modules cors, midd, fetch
const constrolBugets = require('../controller/constrolBugets');

module.exports = async (app)=>{


    //create new budget
    app.post('/budget', async (req, res) =>{
        try {
            let result  = await constrolBugets.createBudget(req.body)
            res.send(req.body);
        } catch (error) {
            res.status(500).json('error in the request rutes budgets')
        }
     });


}