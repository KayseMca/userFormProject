// creating CRUD app saving data to Json
// 

const express = require('express');
const bodyParser = require('body-parser')
var cors = require('cors')

const routes = require('./api/routes/user-routes');

const PORT = process.env.PORT || 3000

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())


// Routes
app.use('/users',routes);

app.get('/',(req,res)=>{
    res.send("we are in home")
})

app.use((res, req, next)=>{
    const error = new Error('Not Found!')
    errorstatus = 404
    next(error)
})
app.use((err,req,res,next)=>{
    res.status(err.status||500)
    res.send({
        error:{
            status:err.status,
            message:err.message
        }
    })
})


app.listen(PORT, ()=>console.log(`Running at ${PORT} port..`))