import mongoose from 'mongoose';

Comment = new Schema({
    text:{
        type:String,
        required:true
    },
    author:{
        type:String,
        name:String,
        email:{ type:String, lowercase: true},
        required:false
    },
    createDate:{
        type:String,
        required:false,
        default: Date.now
    }
});

var blogSchema = mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    author:{
        type:String,
        name:String,
        email:{ type:String, lowercase: true},
        required:false,
        default:"anonymous"
    },
    comments: {type: [Comment]},
    createDate:{
        type:Date,
        required:false,
        default: Date.now
    }
});

var Comment = mongoose.model('Comment', Comment);

module.exports = mongoose.model('Blog',blogSchema);