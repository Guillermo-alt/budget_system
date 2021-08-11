//import the modules to use
const fetch = require('node-fetch');

//routes for views
module.exports = async (app) => {

    app.get('/', async (req, res) =>{
        try {
            let result = await fetch('http://127.0.0.1:3000/budgets',{method:'get'});
            let response = await result.json();
            res.render("budgets", {resulBudgets:  response })
        } catch (error) {
            res.status(500).json('error in the request rutes budgets')
        }
     });
     app.get('/newBuget', async (req, res) =>{
        try {
            res.render("newBudget")
        } catch (error) {
            res.status(500).json('error in the request rutes budgets')
        }
     });

}


