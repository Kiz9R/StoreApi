require('dotenv').config();

const connectdb=require('./db/connect');
const product=require('./models/product');

const jsonProducts = require('./products.json');


const start=async()=>{
    try{
        await connectdb(process.env.MONGO_URI)
        await product.deleteMany();
        await product.create(jsonProducts);
        process.exit(0);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

start();