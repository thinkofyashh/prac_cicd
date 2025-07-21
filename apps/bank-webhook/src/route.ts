import express from "express";
import {prisma} from "@repo/db"

const app=express();

app.post("/",async(req,res)=>{
    // add zod validation here 
    const paymentInformation={
        "amount":req.body.amount,
        "token":req.body.token,
        "userId":req.body.user_identifier
    };
    // now put htis information into the db

    try{
        await prisma.balance.update({
            where:{
                userId:paymentInformation.userId
            },
            data:{
                amount:{
                    increment:paymentInformation.amount
                }
            }
        })
        await prisma.onrampTransaction.update({
            where:{
                token:paymentInformation.token
            },
            data:{
                status:"SUCCESS"
            }
        })
        res.status(200).json({message:"Payment was successful"}); // this is very important .
    }catch(e){
        res.status(411).json({message:"Payment Failed"})
    }  
})




