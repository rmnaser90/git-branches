const express = require('express')
const app = express()
const path = require('path')


app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))




app.use()





const port = 3000
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})