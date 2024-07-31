// Extending the Express Request Object globally

import { UserDocument } from '../../apps/users/user.model'

export {}

declare global {
  namespace Express {
    export interface Request {
      user?: UserDocument
    }
  }
}
