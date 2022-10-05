const path = require('path')
const fs = require('fs')

module.exports = class Product{

    static async find(){
        return new Promise((resolve, reject)=>{
            fs.readFile(path.join(__dirname, '..','data', 'products.json'),(err,data)=>{
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
            fs.writeFile(path.join(__dirname, '..', 'data', 'products.json'), 
            JSON.stringify(data),
            (err)=>{
                if(err){
                    reject(err)
                }

                resolve()
            })
        })
    }

    static async findById(id){
        const products = await this.find()
        return products.find(product => +product.id === +id)
    }

    updateById(id){

    }

    deleteById(id){

    }
}