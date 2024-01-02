import express from 'express'
import { addUser } from '../controller/user-controller.js'

const routes = express.Router()

routes.post('/add', addUser)

export default routes