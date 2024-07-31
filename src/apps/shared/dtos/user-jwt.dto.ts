import { Types } from 'mongoose'

export interface UserJwtPayload {
  _id: Types.ObjectId
  name: string
}
