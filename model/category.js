const path = require('path')
const fs = require('fs')
const Product = require("./product")

module.exports = class Category{
    static async find(){
        return new Promise((resolve, reject)=>{
            fs.readFile(path.join(__dirname, '..','data', 'categories.json'), (err, data)=>{
                if(err){
                    reject(err);
                }

                resolve(JSON.parse(data))
            })
        })
    }

    static async save(body){
        const data = await this.find()

        body.id = data.length + 1

        data.push(body);
        
        return new Promise((resolve, reject)=>{
            fs.writeFile(path.join(__dirname, '..', 'data', 'categories.json'), 
            JSON.stringify(data),
            (err)=>{
                if(err){
                    reject(err)
                }

                resolve()
            })
        })
    }

    static async deleteById(id){
        const products = await Product.find()
        const categories = await this.find()
        const category = categories.filter(category => +category.id === +id)[0]


        const categoryProducts = products.filter(product => +product.categoryId === +id)
        
        const idx = categoryProducts.forEach(product => {
            console.log(product.categoryId)
        });

        products.splice(+idx, +categoryProducts.length)
        console.log(products)
        return new Promise((resolve, reject)=>{
            fs.writeFile(path.join(__dirname, '..', 'data', 'products.json'), 
            JSON.stringify(products),
            (err)=>{
                if(err){
                    reject(err)
                }

                resolve()
            })
        })
    }

    static async findById(id){
        const products = await Product.find()
        const categories = await this.find()
        const category = categories.filter(category => +category.id === +id)[0]

        const categoryProducts = products.filter(product => +product.categoryId === +id)
        return {category: category.type, products: categoryProducts}
    }

    updateById(id){

    }
}