import { Router } from 'express'
import * as mountainsCtrl from '../controllers/mountains.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
const router = Router()

// Public Routes
router.get('/', mountainsCtrl.index)
router.get('/:id', mountainsCtrl.show)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, mountainsCtrl.create)


export {
  router
}