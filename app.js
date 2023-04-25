const express = require('express')
const app = express()
const secondPage= require('./secondPage.js')

app.get('/',(request,response) =>{
    response.send("GET Router on Home Page")
})
app.use('/secondPage',secondPage)
app.listen(3500)