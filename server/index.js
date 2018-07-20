const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller')




const app = express();
app.use( bodyParser.json() );

//connecting server to database
massive(process.env.CONNECTIONS).then( dbInstance => {
    app.set('db', dbInstance )
}).catch( err => console.log(err) );

//ENDPOINTS
app.get('/api/houses', controller.getAll);
app.post('/api/houses', controller.create);
app.delete('/api/houses/:id', controller.delete);







const port = 4000;
app.listen(port, ()=>{ console.log(`Server listening on port ${port}.`); });