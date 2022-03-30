import { Router } from 'express'
import * as mountainsCtrl from '../controllers/mountains.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
const router = Router()

// Public Routes
router.get('/', mountainsCtrl.index)
router.get('/:id', mountainsCtrl.show)
router.get('/search/:search', mountainsCtrl.search)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/:id/comment', checkAuth, mountainsCtrl.createComment)
router.delete('/:id/comment/:commentId', checkAuth, mountainsCtrl.deleteComment)
router.post('/', checkAuth, mountainsCtrl.create)
router.put('/:id', checkAuth, mountainsCtrl.update)
router.delete('/:id', checkAuth, mountainsCtrl.delete)


export {
  router
}