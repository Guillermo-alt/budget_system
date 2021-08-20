//import the modules to use
const fetch = require('node-fetch');


module.exports = async (app) => {

    app.get('/', async (req, res) =>{
        try {
             res.render("index")
        } catch (error) {
            res.status(500).json('error in the request rutes budgets')
        }
     });

     app.get('/newBudget', async (req, res) =>{
        try {
             res.render("budget")
        } catch (error) {
            res.status(500).json('error in the request rutes budgets')
        }
     });

     app.get('/editBudget', async (req, res) =>{
        try {
             res.render("editBudget")
        } catch (error) {
            res.status(500).json('error in the request rutes budgets')
        }
     });

}


