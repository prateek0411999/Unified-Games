const mongoose= require('mongoose');
const Schema = mongoose.Schema
const fpsCoaches = new Schema({

    firstname: String,
    lastname: String,
    email: String,
    contactno : String,
    selectedgame: String,
    hoursingame: String,
    experience: String,
    available: String,
    perhourcharge: String,
    image: String,
    timings: String

})
module.exports=mongoose.model('fpsCoaches',fpsCoaches,'fpsCoaches')