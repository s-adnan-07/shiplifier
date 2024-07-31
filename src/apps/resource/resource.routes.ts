import { Router } from 'express'
import { ResourceRouter } from './resource.controller'
import { protectRoute } from '../shared'
import expressAsyncHandler from 'express-async-handler'

const router = Router()

router.get(
  '/',
  expressAsyncHandler(protectRoute),
  expressAsyncHandler(ResourceRouter.getResource)
)

export default router
