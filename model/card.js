const  fs = require('fs')
const path = require('path')
const Product = require('./product')

module.exports = class Card{
    static async get(){
        return new Promise((resolve, reject)=>{
            fs.readFile(path.join(__dirname, '..','data', 'card.json'), (err, data)=>{
                if(err){
                    reject(err);
                }

                resolve(JSON.parse(data))
            })
        })
    }

    static async buy(id){
        const card = await this.get()
        console.log(id);
        const idx = card.products.findIndex(product => product.id === id)
        
        if(idx < 0){
            const product = await Product.findById(id)
            product.count = 1
            card.products.push(product)

            card.total = +card.total + parseInt(product.price)
        }else{
            card.products[idx].count = +card.products[idx].count + 1
            card.total = +card.total + parseInt(card.products[idx].price)
        }

        return new Promise((resolve, reject)=>{
            fs.writeFile(path.join(__dirname, '..','data', 'card.json'), 
            JSON.stringify(card),
            (err)=>{
                if(err){
                    reject(err);
                }

                resolve()
            })
        })
    }

    remove(){
        
    }
}