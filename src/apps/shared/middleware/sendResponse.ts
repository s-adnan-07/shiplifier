import { Response } from 'express'

/**
 * Function to send standard response back to client
 * @example
 * {
 *  statusCode: 200,
 *  message: "Success"
 * }
 *
 * @param statusCode Standard HTTP status code
 * @param message Message to be sent as response
 * @param res Express response object
 */
export function sendResponse(
  res: Response,
  statusCode: number = 200,
  message: any = 'Success'
) {
  const responseObject = {
    statusCode,
    message,
  }

  console.log(message)
  res.status(statusCode).json(responseObject)
}
