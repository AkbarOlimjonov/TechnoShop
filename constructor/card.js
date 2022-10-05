const Card = require('../model/card')


module.exports.getCard = async function (req, res) {
    const card = await Card.get()
    res.status(200).send(card)
}

module.exports.buy = async function (req, res) {
    const productId = +req.body.productId
    await Card.buy(productId)
    res.status(200).send('Bought successfull')
}

module.exports.remove = async function (req, res) {
    const products = req.body
    await Product.save(products)

    res.status(201).send('Successfull')
}