const router = require('express').Router()
const listingsCtrl = require('../controllers/listings.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/
router.get('/', listingsCtrl.index) //done
router.get('/:id', listingsCtrl.show)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth,listingsCtrl.create) //done
router.put('/:id', checkAuth,listingsCtrl.update)
router.put('/:id/purchase', checkAuth,listingsCtrl.purchase)
router.delete('/:id', checkAuth, listingsCtrl.deleteListing)

module.exports = router
