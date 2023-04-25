const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    age:{
        type:Number,
        required: true
    },
    username:{
        type:String,
        required:true
    },
});

const UserModel = mongoose.model("user1",UserSchema);
module.exports = UserModel;
