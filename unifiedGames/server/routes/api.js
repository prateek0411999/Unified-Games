const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');
//const jwt =require('jsonwebtoken');


const Menu=require('../models/menuSchema');
const db="mongodb://localhost/unifiedGames";
mongoose.connect(db,(err)=>{
    if(err){
        console.log('Error!'+ err)
    }else{
        console.log('connected to mongoDB')
    }
});

router.get('/Menu',(req,res)=>{
    console.log('!!!!!!!!!!!')
    Menu.findOne({ _id: ObjectId("5ed6a6743825f07d66d139f1") },(err,menu)=>{
        if(err)
        {
            console.log('bhai yeh na ata ese'+err);
        }
        else
        {
            res.status(200).send(menu);
        }
    })
})

module.exports =router;


