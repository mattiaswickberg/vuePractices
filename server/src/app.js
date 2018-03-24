// Initialize variables
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req, res) => {
    console.log('user trying to acccess page')
    res.send(
        [{
            title: "Hello there!",
            description: "We are the knights who say Ni!"
        }]
    )
})

app.listen(process.env.PORT || 8081, function() {
    console.log('Server started on port 8081; press Ctrl-C to terminate')
})
