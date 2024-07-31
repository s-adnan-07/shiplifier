import { LoginUserDto, sendResponse } from '../shared'
import User from '../users/user.model'
import bcrypt from 'bcrypt'

class AuthService {
  async login({ email, password }: LoginUserDto) {
    const user = await User.findOne({ email })
    if (!user) return null

    const passwordsMatch = await bcrypt.compare(password, user.password)
    if (!passwordsMatch) return null

    return user
  }
}

export default new AuthService()
