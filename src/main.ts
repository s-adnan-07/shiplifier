import config from './config'
import connectDB from './database'
import { app } from './server'

async function main() {
  try {
    await connectDB()
    app.listen(config.PORT, () =>
      console.log(`Server running on http://localhost:${config.PORT}`)
    )
  } catch (error) {
    console.error('Failed to start server', error as any)
  }
}

main()
