import 'dotenv/config'

const { PORT, URI, JWT_SECRET } = process.env

interface Config {
  PORT: number
  URI: string | undefined
  JWT_SECRET: string
}

const config: Config = {
  PORT: parseInt(PORT || '9095', 10),
  URI,
  JWT_SECRET: JWT_SECRET || 'supersecret',
}

export default config
