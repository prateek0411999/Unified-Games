const mongoose= require('mongoose');
const Schema = mongoose.Schema
const userSchema = new Schema({

    firstname: String,
    lastname: String,
    email: String,
    contactno : String,
    password: String,
    confirmPassword: String
})
module.exports=mongoose.model('user',userSchema,'registeredUsers')