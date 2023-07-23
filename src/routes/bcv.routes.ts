import { Router } from 'express'

// Controller
import { getBcvDollarPrice } from './../controllers/bcv.controller'

const bcvRouter = Router()

// Routes
bcvRouter.get('/', getBcvDollarPrice)

export default bcvRouter
