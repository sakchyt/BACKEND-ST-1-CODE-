const mongoose = require ('mongoose');

const postSchema = new mongoose.Schema(
    {
        title : {
            required : true,
            type : String
        },
        author : {
            required : true,
            type : String
        },
        content : {
            requiered : true,
            type : String
        }
    }
)
module.exports = mongoose.model('Post',postSchema);