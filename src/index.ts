// Environment Variables
import 'dotenv/config'
import { env } from 'process'

// Express
import express from 'express'

// Middlewares
import cors from 'cors'
import morgan from 'morgan'

// Routes
import bcvRouter from './routes/bcv.routes'

console.clear()
const app = express()

// Setup
const PORT: number = +env.PORT

// Middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

// Router
app.use('/', bcvRouter)

app.listen(PORT, (): void => {
  console.log('Server on PORT', PORT)
})
