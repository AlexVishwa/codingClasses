const express= require('express')
const app = express()
const port = process.env.PORT || '3000'
const create= require('./routes/create')
const connection= require('../hea and foot/config/db')
const path = require('path');
//const mongoConnection= require('../hea and foot/controllers/mongoConnection')
connection()
//const create= require('./routes/create.js')
app.use(express.json());
app.set('view engine','ejs')
//app.use('/',create)
app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
})