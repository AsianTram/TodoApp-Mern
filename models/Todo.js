const mongoose= require('mongoose');

const TodoSchema= new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    task:{
        type: String,
        required: true
    },
    duedate:{
        type: Date,
        required: true
    },
    location:String,
    description: String,
    done: {
        type: Boolean,
        default: false
    },
    due: {
        type: Boolean,
        default: false
    }
})

module.exports=Todo=mongoose.model('todo', TodoSchema);