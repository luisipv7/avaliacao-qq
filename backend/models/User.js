const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
var UserSchema = new Schema({
    username:{
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    },
    updateAt:{
        type:Date,
        required:true,
        default:Date.now
    }

});

UserSchema.methods.hashPassword = function(password){
    return bcrypt.hashSync(password,12);
};
UserSchema.methods.comparePassword = function(password, hashedPassword){
    return bcrypt.compareSync(password, hashedPassword);
};

module.exports = User = mongoose.model("User", UserSchema);