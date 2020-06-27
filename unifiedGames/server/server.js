const express= require('express');
const bodyParser= require('body-parser');
const cors =require('cors');

const app= express();

app.use(cors());

app.use(bodyParser.json())



//app.use('',api);
const mongoose= require('mongoose');



const Menu=require('./models/menuSchema');
const Apex=require('./models/ApexFPS');
const User=require('./models/user');




const db="mongodb://localhost/unifiedGames";
mongoose.connect(db,(err)=>{
    if(err){
        console.log('Error!'+ err)
    }else{
        console.log('----connected to mongoDB-------')
    }
});
//_id: ObjectId("5ed6a6743825f07d66d139f1")

app.get('/menu',(req,res)=>{

    console.log('!!!!!!!!!!!')
    Menu.find({},(err,menu)=>{
        if(err)
        {
            console.log('bhai yeh na ata ese'+err);
        }
        else
        {
            res.status(200).json(menu);
        }
    })
})
app.get('/ApexFps',(req,res)=>{
    console.log('its here !!!!!');
    Apex.find({},(err,data)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            res.status(200).send(data);
        }
    })

})


const PORT = 3000

app.get('/',(req,res)=>{
    res.send('Hello from server')
})


app.listen(PORT, ()=>{
    console.log('server running on localhost'+ PORT);

})


//posting the registered users into the database
app.post('/signup',(req,res)=>{

    console.log(req.body);
    console.log("--------------");
    console.log('------------------------------------------')
    let userData= req.body;
    let user=new User(userData);

    user.save((error,registeredUser)=>{
        if(error){
            console.log(error);

        }else{
            res.status(200).send("data inserted into the database");
            res.status(200).json(registeredUser);
        }
    })
})