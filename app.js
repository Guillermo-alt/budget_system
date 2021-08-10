/** Import required modules */
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const db = require('./db/db.connection');

/**Global middlewares config */
app.use(cors());
app.use(express.json());

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

/*Start server */
async function startServer(){
    try {
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