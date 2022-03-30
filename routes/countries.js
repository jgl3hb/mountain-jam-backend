import { Router } from 'express'
import * as countriesCtrl from '../controllers/countries.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
const router = Router()

// Public Routes
router.get('/', countriesCtrl.index)
router.get('/:id', countriesCtrl.show)

/*---------- Protected Routes ----------*/


export {
  router
}