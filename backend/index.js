import express from "express";
import { PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import { Car } from "./models/carModel.js";
import carRoutes from "./routes/carRoutes.js";
import cors from "cors";
const app=express();

app.use(express.json());

app.use(cors({
    origin:'http://localhost:5173',
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type'],
}))

app.get('/',(req,res)=>{
    console.log(req)
    return res.status(235).send("Hello")
});

app.use('/cars',carRoutes)

mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log("app connected to mongoDB")
    app.listen(PORT, ()=>{
        console.log(`Listening at Port ${PORT}`);
    })
})
.catch((err)=>{
console.log(err)
})