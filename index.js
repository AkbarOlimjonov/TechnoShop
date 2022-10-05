const express = require('express')
const app = express()

const port = normalizePort(process.env.PORT || 3000)

// Import routes 
const productRouter = require('./routes/product')
const categoryRouter = require('./routes/category')
const cardRouter = require('./routes/card')

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('port', port)

// Routing
app.use('/products', productRouter)
app.use('/categories', categoryRouter)
app.use('/card', cardRouter)

try {
    app.listen(port, ()=>{
        console.log('Server working on port ', app.get('port'));
    })
} catch (error) {
    console.log(error);
    process.exit(1)
}

function normalizePort(val){ 
    const port = parseInt(val, 10)

    if(isNaN(port)){
        return val
    }

    if(port >= 0){
        return port
    }

    return false
}