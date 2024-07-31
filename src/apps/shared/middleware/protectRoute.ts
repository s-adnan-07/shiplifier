import { NextFunction, Request, RequestHandler, Response } from 'express'
import jwt, { JsonWebTokenError } from 'jsonwebtoken'
import config from '../../../config'
import User from '../../users/user.model'

// This middleware needs to hace same generic type arguments as the controller it is protecting
// Since we will be using this function for other routes we use generics

/**
 * Middleware function to protect routes from unauthenticated access
 * @param req Express request object
 * @param res Express response object
 * @param next Next function in the middleware stack
 */
export const protectRoute = async <T, U>(
  req: Request<T, {}, U>,
  res: Response<{}>,
  next: NextFunction
) => {
  const token = req.cookies.jwt

  if (!token) {
    req.statusCode = 401
    req.statusMessage = 'Unauthorized - No Token Provided'
    throw new Error('Unauthorized - No Token Provided')
  }

  try {
    // Invalid Tokens Throw error 'invalid signature'
    // Hence decoded will not be undefined
    const { _id } = jwt.verify(token, config.JWT_SECRET) as jwt.JwtPayload
    const user = await User.findById(_id).select('-password').exec()

    if (!user) {
      req.statusCode = 404
      req.statusMessage = 'User does not exist'
      throw new Error('User does not exist')
    }

    req.user = user

    next()
  } catch (err) {
    if (err instanceof JsonWebTokenError) {
      req.statusCode = 401
      req.statusMessage = 'Unauthorized - Invalid Token'
    }

    throw err
  }
}
