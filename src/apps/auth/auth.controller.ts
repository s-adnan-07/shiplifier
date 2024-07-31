import { Request, Response } from 'express'
import { LoginUserDto, sendResponse } from '../shared'
import authService from './auth.service'
import generateToken from '../shared/middleware/generateToken'

export class AuthController {
  static async login(req: Request<{}, {}, LoginUserDto>, res: Response) {
    const user = await authService.login(req.body)

    if (user == null) {
      req.statusCode = 401
      throw new Error('Invalid email or password')
    }

    const { _id, name } = user
    generateToken({ _id, name }, res)

    sendResponse(res, 200, `User '${user.name}' logged in successfully`)
  }
}
