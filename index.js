const express = require('express')

const bodyParser = require('body-parser');

const app = express()
const port = 3000
const templatePath = require('path')
app.use(bodyParser.urlencoded({extended: false}))

app.post('/chat', (req, res) => {
    let userInput = req.body.Message;
    res.send(userInput)
})

app.get('/should', (req, res) => res.send('Hi'))
app.get('/chat', (req, res)=> res.sendFile(templatePath.join(__dirname + '/chat.html')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))