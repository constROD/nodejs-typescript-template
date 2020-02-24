import * as dotenv from 'dotenv'
dotenv.config()

export default {
  /* API */
  API_NAME: process.env.API_NAME || 'Rod Development App',
  API_ZONE: process.env.API_ZONE || 'development',
  API_PORT: process.env.API_PORT || 3001
}
