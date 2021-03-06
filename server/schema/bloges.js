import mongoose from 'mongoose';
var Schema = mongoose.Schema;

Comment = new Schema({
    text:{
        type:String,
        required:true
    },
    author:{ // populate or save detail from logged in user
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
    // add like unlike feature later
    title:String,
    en:String,
    
    comments: {type: [Comment]},
    createDate:{
        type:Date,
        required:false,
        default: Date.now
    }
});

var Comment = mongoose.model('Comment', Comment);

module.exports = mongoose.model('Blog',blogSchema);