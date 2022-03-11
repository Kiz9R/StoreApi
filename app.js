require('dotenv').config();
//async errors

require('express-async-errors');


const express=require('express');
const app = express();

const connectdb=require('./db/connect');
const productRouter=require('./routes/products')

const notFound=require('./middleware/not-found');
const errorMiddleware=require('./middleware/error-handler');

//middleware
app.use(express.json());

// routes

app.get('/',(req,res)=>{
    res.send(`<h1>Store Api</h1><a href="/api/v1/products">Products</a>`);
});

app.use('/api/v1/products',productRouter);

//Products route

app.use(notFound);
app.use(errorMiddleware);

const port=process.env.PORT || 3000;

const start=async()=>{
    //connect db
    try{
        await connectdb(process.env.MONGO_URI);
        app.listen(port,console.log(`Listening on port ${port}`));
    }catch(err){
        console.log(err);
    }
    
}

start();