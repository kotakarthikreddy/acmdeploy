const express = require('express')
const cors = require('cors')
const url = require('url');

let port = process.env.PORT || 3001

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const contactForm = require('./routes/contacForm')

app.use('/', contactForm);

app.get('/', (req, res) => {
    res.send("ACM")
    console.log("ACM");
})

app.listen(port, () => {
    console.log('Server running on port ' + port)
})