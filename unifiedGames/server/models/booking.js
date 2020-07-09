const mongoose= require('mongoose');
const Schema = mongoose.Schema
const booking  = new Schema({

    coachemail: String,
    useremail: String,
    bookingdate: String,
    bookingstatus: String,

})
module.exports=mongoose.model('booking',booking,'bookings')