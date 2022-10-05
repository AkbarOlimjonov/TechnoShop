const { Router } = require('express')
const router = Router()
const constructor = require('../constructor/category')

router.get('/', constructor.getCategory)

router.post('/add', constructor.setCategory)

router.delete('/delete/:id', constructor.DeleteById)

router.get('/:id', constructor.categoryFindById)

module.exports = router