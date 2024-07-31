import mongoose, { HydratedDocument, CallbackError } from 'mongoose'
import bcrypt from 'bcrypt'

interface UserInterface {
  // using userId instead of id as mongoose uses _id
  // userId: string
  name: string
  email: string
  password: string

  createdAt?: Date
  updatedAt?: Date
}

const UserSchema = new mongoose.Schema<UserInterface>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
)

UserSchema.pre('save', async function (next) {
  try {
    if (this.isNew || this.isModified('password')) {
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(this.password as string, salt)
      this.password = hashedPassword
    }
    next()
  } catch (error) {
    next(error as CallbackError)
  }
})

const User = mongoose.model('user', UserSchema)

export type UserDocument = HydratedDocument<UserInterface>
export default User
