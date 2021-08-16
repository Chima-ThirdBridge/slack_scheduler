import express from 'express'
import projectController from './controllers/project'
import specialistController from './controllers/specialist'
import verificationMiddleware from './middleware/verification'
import { config } from 'dotenv'
import actions from './actions/'
import events from './events'

const app = express()

config()

app.use(events)
app.use(actions)

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(specialistController)
app.use(projectController)

export default app