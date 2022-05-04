const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()

dotenv.config({ path: '../env/config.env' })
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/database', (req, res) => {
    console.log('its working')
})

let uri = process.env.MONGO_URI
let port = process.env.PORT | 3500

app.listen(port, (req,res)=>{
    console.log(`server is listening on port ${port}`);
})