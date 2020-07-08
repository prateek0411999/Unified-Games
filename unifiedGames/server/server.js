const express= require('express');
const jwt=require('jsonwebtoken');

const bodyParser= require('body-parser');
const cors =require('cors');

const app= express();

app.use(cors());

app.use(bodyParser.json())

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");    
//     next();
//   });

//app.use('',api);
const mongoose= require('mongoose');



const Menu=require('./models/menuSchema');
const Apex=require('./models/ApexFPS');
const User=require('./models/user');
const fpsCoaches=require('./models/fpsCoaches');
const { count } = require('./models/fpsCoaches');



const db="mongodb://localhost/unifiedGames";
mongoose.connect(db,(err)=>{
    if(err){
        console.log('Error!'+ err)
    }else{
        console.log('----connected to mongoDB-------')
    }
});
//_id: ObjectId("5ed6a6743825f07d66d139f1")

function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    //extract the token value from bearer token 
    let token = req.headers.authorization.split(' ')[1]
   
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }

    let payload = jwt.verify(token, 'secretKey')
 
 
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }

    req.userId = payload.subject
    next()
    
  }


//firstly this verifyToken will run if token verifies then only this api code will be executed
app.get('/menu',verifyToken,(req,res)=>{

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

app.post('/checkFps',(req,res)=>{
    let coachemail = req.body;
    console.log('::::::::::::', coachemail.email)
    fpsCoaches.findOne({email: coachemail.email},(error,coach)=>{
        if(error){
            console.log(error);
          }
        else{
            if(!coach){
                res.status(200).send(false)
            }else{
        
                    res.status(200).send(true);                   

                }
            
        }
    })
})

app.get('/getFpsCoachesByGameName/:id',(req,res)=>{
    let data=req.params.id;

    let data1=data.slice(3,4);

    if(data1 == "1")
    {
        console.log('in 1..')
        fpsCoaches.find({selectedgame : "Pubg Mobile"},(error,coach1)=>{
            if(error)
            {
                console.log('......');
                res.send(error);

            }
            else 
            {
                if(coach1)
                {
                    console.log('.............');
                      res.status(200).send(coach1);
                }
                else
                {
                    console.log('.........................')
                 res.status(200).send("No coach for this game ");
                }
            }
        })

    }
    else
    { 
            if(data1=="2")
            {
                console.log('in 2');

                fpsCoaches.find({selectedgame: "Apex Legends"},(error,coach2)=>{
                    if(error)
                    {
                        console.log('error...')
                        res.send(error);

                    }
                    else
                    { 
                        if(coach2)
                        {
                            console.log('........');
                            console.log(coach2);
                            res.status(200).send(coach2);
                        }
                        else
                        {
                            console.log('.....................');
                            res.send("No coach for this game ");
                        }
                 }})
            }
            else
            { 
                if(data1=="3")
                {

                    console.log('in 3')
                       fpsCoaches.find({selectedgame: "CS:GO"},(error,coach3)=>{
                        if(error)
                        {
                            
                            res.send(error);
                        }
                        else
                        { 
                            if(coach3)
                            {
                                console.log('........');
                                res.status(200).send(coach3);
                            }
                            else
                            {
                                console.log('...................');
                                res.send("No coach for this game ");
                            }
                        }})
                }
                else
                {
                     if(data1 == "4")
                     {
                         console.log('in 4');

                        fpsCoaches.find({selectedgame: "Call of Duty"},(error,coach4)=>{
                          if(error)
                          {
                              res.send(error);

                         }
                         else
                         { 
                             if(coach4)
                            {
                                console.log('........');
                                res.status(200).send(coach4);
                            }
                            else
                            {
                                console.log('.....................');

                                res.send("No coach for this game ");
                            }
                        }})

                     }
                }
            }
    }
    console.log(data1);
    
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
            //first creating the payload(is an object that contains the registered user id)
            let payload= {subject: registeredUser._id}
            //lets sign a token 
            let token= jwt.sign(payload, 'secretKey');
            //last step is to send the token as an object 

            
            console.log("data inserted into the database");
            res.status(200).send({token});
        }
    })
})

//posting fpsCoaches data
app.post('/fpscoaching',(req,res)=>{

    console.log(req.body);
    console.log("--------------");
    console.log('------------------------------------------')
    let fpsCoachData= req.body;
    let fpsCoach=new fpsCoaches(fpsCoachData);

    fpsCoach.save((error,registeredFpsCoach)=>{
        if(error){
            console.log('---------error bolte public-----------')
            console.log(error);

        }else
        {
            res.status(200).send(registeredFpsCoach);
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
                   
                    let payload = {subject: user._id};
                    let token=jwt.sign(payload,'secretKey')
                    res.status(200).send({token, user1: user});

                    

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

