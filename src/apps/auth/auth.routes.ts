import { Router } from 'express'
import { AuthController } from './auth.controller'
import expressAsyncHandler from 'express-async-handler'
const router = Router()

router.post('/login', expressAsyncHandler(AuthController.login))

export default router
