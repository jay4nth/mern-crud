import express from "express"
import { Car } from "../models/carModel.js";

const router = express.Router();

router.post('/', async (req,res)=>{
    try {
        if(
            !req.body.company ||
            !req.body.model ||
            !req.body.year
        ){
            return res.status(400).send({
                message:'Send all required fields'
            })
        }
        const newCar={
            company: req.body.company,
            model: req.body.model,
            year:req.body.year,
        };

        const car=await Car.create(newCar);
        return res.status(201).send(car)
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
})

router.get('/', async (req,res) => {
    try {
        const cars=await Car.find({});

        return res.status(200).json({
            count: cars.length,
            data: cars
        })
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
})

router.get('/:id', async (req,res) => {
    try {
        const {id}=req.params;
        const car=await Car.findById(id);

        return res.status(200).json(car)
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
})

router.put('/:id', async (req,res) => {
    try {
        if(
            !req.body.company ||
            !req.body.model ||
            !req.body.year
        ){
            return res.status(400).send({
                message:'Send all required fields'
            })
        }

        const {id}=req.params;

        const result = await Car.findByIdAndUpdate(id, req.body)

        if(!result){
            return res.status(404).json({message: "car not found"})
        }
        return res.status(200).send({message: "car updated successfully"})

    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
})

router.delete('/:id', async (req,res) => {
    try {
        const {id}= req.params

        const result = await Car.findByIdAndDelete(id);
        if(!result){
            return res.status(404).json({message: "car not found"})
        }
        return res.status(200).send({message: "car deleted successfully"})
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }    
})

export default router;