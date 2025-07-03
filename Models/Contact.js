const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema(
    {
        name : String,
        age : Number,
        email : {type : String, required : true, unique : true},
        phoneNumber : Number,
        image : {
            type : String,
            default :'/User.png'
        }
    }
)

module.exports = mongoose.model('Contact', contactSchema)