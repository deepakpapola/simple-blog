import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';
import validator from '../lib/validator.js';

var userSchema = mongoose.Schema({

    local: {
        name:{
            type:String,
            required:false,
            default: ""
        },
        username:{
            type:String,
            validate:[validator({
                length:{
                    min:3,
                    max:20
                }
            }), "username"],
            required:false,
            default: "defaultusername"
        },
        password:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        registerDate:{
            type:Date,
            required:true,
            default: Date.now
        },
        loginDate:{
            type:Date,
            required:false
        }
    }
});

userSchema.methods.generateHash =(password) => {
    return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null);
};

userSchema.methods.validPassword = (password,pass) => {
    return bcrypt.compareSync(password,pass);
};

module.exports =  mongoose.model('User', userSchema);
