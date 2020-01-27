import { Request, Response } from 'express'

class App {
  public getTest = async (req: Request, res: Response): Promise<any> => {
    res.status(200).send("GET Test")
  }
}

export default App