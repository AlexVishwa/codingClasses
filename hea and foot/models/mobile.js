const mongoose=require('mongoose')
var mobileSchema= mongoose.Schema({
    name: {
        type: String
    },
    model:{
        type: String
    },
    description:{
        type: String
    }
})
module.exports= mongoose.model('Mobile',mobileSchema)