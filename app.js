require('dotenv').config()
require('express-async-errors')
// express
const express = require('express')
const app = express()

// database
const connectDB = require('./db/connect')

// middleware
const notFoundMiddleWare = require('./middleware/not-found')
const errorHandlerMiddleWare = require('./middleware/error-handler')


app.use(express.json) //<- parse req.body

// homepage route
app.get('/', (req,res) =>{
    res.send('e-commerce api')
})

app.use(notFoundMiddleWare)
app.use(errorHandlerMiddleWare)

const port = process.env.PORT || 5000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()