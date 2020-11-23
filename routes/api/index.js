const router = require('express').Router()

router.use('/users', require('./users'))
router.use('/books', require('./books'))
router.use('/swaps', require('./swaps'))
router.use('/googleBooks', require('./googleBooks'))

router.use(require('../../middleware/errorHandler'))

module.exports = router
