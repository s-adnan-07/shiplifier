import { Request, Response } from 'express'
import { CreateUserDto } from '../shared'
import userService from './user.service'

export class UserController {
  static async createUser(req: Request<{}, {}, CreateUserDto>, res: Response) {
    await userService.createUser(req.body)
    res.status(200).json({ createUser: 'bar' })
  }

  static async getAllUsers(req: Request, res: Response) {
    res.status(200).json({ getAllUsers: 'bar' })
  }

  static async getUserbyId(req: Request, res: Response) {
    res.status(200).json({ fgetAllUsersoo: 'bar' })
  }

  static async updateUser(req: Request, res: Response) {
    res.status(200).json({ updateUser: 'bar' })
  }

  static async deleteUser(req: Request, res: Response) {
    res.status(200).json({ deleteUser: 'bar' })
  }
}
