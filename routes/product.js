const { Router } = require('express')
const router = Router()
const constructor = require('../constructor/product')

router.get('/', constructor.getProducts)

router.post('/add', constructor.setProducts)

module.exports = router