const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var PostSchema = new Schema({
    post: {
        type: String,
        require: true
    },
    user:{
        type: Schema.Types.ObjectId,
        required:true,
        ref: "User"
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now
    },
    updateAt:{
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = Post = mongoose.model("Post", PostSchema);