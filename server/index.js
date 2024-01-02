import express from "express";
import connect from "./DB/DB.js";
import routes from './router/router.js'
import cors from 'cors'
import bodyParser from "body-parser";

const app = express()
const PORT = 5000

connect()
app.use(cors())
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', routes)

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})