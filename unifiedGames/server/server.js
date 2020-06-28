const express= require('express');
const bodyParser= require('body-parser');
const cors =require('cors');

const app= express();

app.use(cors());

app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");    
    next();
  });

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


//posting the registered users into the database
app.post('/signup',(req,res)=>{

    console.log(req.body);
    console.log("--------------");
    console.log('------------------------------------------')
    let userData= req.body;
    let user=new User(userData);

    user.save((error,registeredUser)=>{
        if(error){
            console.log('---------error bolte public-----------')
            console.log(error);

        }else{
            
            console.log("data inserted into the database");
            res.status(200).send(registeredUser);
        }
    })
})

app.post('/login',(req,res)=>{
    console.log('|||||||||||||||||||||||||||||||');

    let userData=req.body;
    console.log(userData);
    User.findOne({email: userData.email},(error,user)=>{
        console.log(user.password);
        if(error){
            console.log(error);
          }
        else{
            if(!user){
                res.status(401).send('invalid email')
            }else{
                if(user.password !== userData.password){
                    res.status(401).send('Invalid password')
                }else{
                    console.log('||||||------- its here')
                   res.json(user);
                }
            }
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

