import express, { Application } from 'express'
import * as bodyParser from 'body-parser'
import cors from 'cors'

import { app } from './routes/App'

class App {
  public express: Application

  constructor() {
    this.express = express()
    this.setMiddlewares()
    this.setRoutes()
  }

  private setMiddlewares(): void {
    this.express.use(cors())
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: false }))
    this.express.use(express.json())
  }

  private setRoutes(): void {
    this.express.use('/app', app)
  }
}

export default new App().express