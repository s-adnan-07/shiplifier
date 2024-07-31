import mongoose from 'mongoose'
import config from '../config'

function handleConnectionErrors(e: unknown) {
  if (e instanceof Error) {
    console.error(e.message)
    return
  }

  console.log(e)
}

async function connectDB() {
  try {
    if (!config.URI) throw new Error('No Connection URI defined')

    await mongoose.connect(config.URI)
    console.log('MongoDB connected')
  } catch (error) {
    console.error(`Error connecting to mongoDB`)
    handleConnectionErrors(error)
  }
}

export default connectDB
