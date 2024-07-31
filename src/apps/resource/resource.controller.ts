import { Request, Response } from 'express'

export class ResourceRouter {
  static async getResource(req: Request, res: Response) {
    res.status(200).json({ resouce: 'success', user: req.user?.name })
  }
}
