const Category = require('../model/category')

module.exports.getCategory = async function (req, res) {
    const categories = await Category.find()
    res.status(200).send(categories)
}

module.exports.setCategory = async function (req, res) {
    const categories = req.body
    await Category.save(categories)

    res.status(201).send('Successfull')
}

module.exports.categoryFindById = async function (req, res) {
    const id = req.params.id
    
    const categoryProducts = await Category.findById(id)

    res.status(200).send(categoryProducts)
}


module.exports.DeleteById = async function (req, res) {
    const id = req.params.id
    
    const categoryProducts = await Category.deleteById(id)

    res.status(200).send(categoryProducts)
}