const mongoose= require('mongoose');
const Schema = mongoose.Schema
const menuSchema = new Schema({
    Gname: [
        {
            name: String,
            desc: String
        },
        {
            name: String,
            desc: String
        },
        {
            name: String,
            desc: String
        },
        {
            name: String,
            desc: String
        }

    ],
    Games: [{name: String },{name: String},{name: String},{name: String}]
})

module.exports=mongoose.model('menu',menuSchema,'menu')