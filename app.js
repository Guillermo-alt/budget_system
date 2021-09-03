/** Import required modules */
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const middCorsLimit = require('./middlewares/midd.cors.limit');
const db = require('./db/db.connection');
const Budget = require('./db/db.budget.model');
const Period = require('./db/db.period.model');
const Concept = require('./db/db.concept.model');
const Income = require('./db/db.income.model');
const DirectCost = require('./db/db.directCost.model');
const AdminExpenses = require('./db/db.adminexpenses.model');
const Resources = require('./db/db.resources.model');
const Users =  require('./db/db.users.model')

const viewsRutes = require('./routes/routes');
const viewBudgets =  require ('./app/view/view.budget');
const viewUsers =  require ('./app/view/view.users');

const bodyParser = require('body-parser');

//Utilice middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/**Global middlewares config */
app.use(cors());
app.use(express.json());
//app.use(middCorsLimit.limiter);

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

/*Start server */
async function startServer(){
    try {
        await Users.sync({ alter: true });
        await Budget.sync({ alter: true });
        await Period.sync({ alter: true });
        await Concept.sync({ alter: true });
        await AdminExpenses.sync({ alter: true });
        await Income.sync({ alter: true });
        await DirectCost.sync({ alter: true });
        await Resources.sync({ alter: true });
       
        
        await db.authenticate();//connect to data base
        console.log('Conected to Database'); 
        app.listen(process.env.PORT, process.env.HOST, () =>{   //connect to server
            console.log(`Server started at http://${process.env.HOST}:${process.env.PORT}`);
        });
    } catch (error) {
        console.error('Conection to Database failed: ' + error.message);
    }
}

startServer();
/** Start API routes */
viewsRutes(app);
viewBudgets(app);
viewUsers(app);