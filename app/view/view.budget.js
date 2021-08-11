//import modules cors, midd, fetch
const constrolBugets = require('../controller/constrolBugets');

module.exports = async (app)=>{

    app.get('/budgets', /*middlewares*/ async (req, res)=>{
        try {
            let result = await constrolBugets.getAllBudgets();
            res.send(result)
        } catch (error) {
            console.log(error)
            res.status(500).json('error in the request view budgets')
        }
    })

}