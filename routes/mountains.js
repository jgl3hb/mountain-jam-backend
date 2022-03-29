import { Router } from 'express'
import * as mountainsCtrl from '../controllers/mountains.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
const router = Router()

// Public Routes
router.get('/', mountainsCtrl.index)
router.get('/:id', mountainsCtrl.show)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/comment', checkAuth, mountainsCtrl.createComment)
router.delete('/comment/:id', checkAuth, mountainsCtrl.deleteComment)
router.post('/', checkAuth, mountainsCtrl.create)
router.put('/:id', checkAuth, mountainsCtrl.update)
router.delete('/:id', checkAuth, mountainsCtrl.delete)


export {
  router
}