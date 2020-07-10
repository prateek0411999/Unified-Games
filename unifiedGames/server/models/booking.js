const mongoose= require('mongoose');
const Schema = mongoose.Schema
const booking  = new Schema({

    coach: [{
        _id: String,
    firstname:String,
    lastname: String,
    email: String,
    contactno : String,
    selectedgame: String,
    hoursingame: String,
    experience: String,
    available: String,
    perhourcharge: String,
    image: String,
    timings: String,
    }],

    user: [{
        _id: String,
    confirmPassword: String,
    
    contactno: String,
    email: String,
    firstname: String,
    lastname: String,
    password: String,

    }],
    bookingdate: String,
    bookingstatus: String,

})
module.exports=mongoose.model('booking',booking,'bookings')