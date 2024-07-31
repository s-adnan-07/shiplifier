import express from 'express'
import cookieParser from 'cookie-parser'
import { globalRouter } from '../router'
import { globalErrorHandler } from '../apps/shared'

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use('/api/v1', globalRouter)
app.use(globalErrorHandler)

export default app
