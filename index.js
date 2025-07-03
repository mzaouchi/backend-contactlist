const express = require('express')
const ConnectDB = require('./Config/ConnectDB')
const contactRouter = require('./Routes/Contact')
const cors = require('cors')

const app = express()

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true 
}))


require('dotenv').config()

ConnectDB()

app.use(express.json())

app.use('/Contact',contactRouter)

app.listen(process.env.PORT, console.log(`Server is running on the port ${process.env.PORT}`))
