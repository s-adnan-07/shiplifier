import { CreateUserDto } from '../shared'
import User from './user.model'

class UserService {
  async createUser(createUserDto: CreateUserDto) {
    const user = await User.create({ ...createUserDto })
    return
  }
}

export default new UserService()
