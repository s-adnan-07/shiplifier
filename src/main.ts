import config from './config'
import { app } from './server'

async function main() {
  try {
    app.listen(config.PORT, () =>
      console.log(`Server running on http://localhost:${config.PORT}`)
    )
  } catch (error) {
    console.error('Failed to start server', error as any)
  }
}

main()
