import express from 'express'
import 'dotenv/config'

const app = express()

app.use(express.json())
// app.use('/api/v1')

export default app
