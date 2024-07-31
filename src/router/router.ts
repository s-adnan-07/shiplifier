import { authRouter } from '../apps/auth'
import { resourceRouter } from '../apps/resource'
import { userRouter } from '../apps/users'
import { Router } from 'express'

const router = Router()

router.use('/users', userRouter)
router.use('/auth', authRouter)
router.use('/resource', resourceRouter)

export default router
