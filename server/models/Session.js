const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    role: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    topicsToFocus: {
        type: String,
        required : true
    },
    description : {
        type: String,
        required : true
    },
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question"
    }]
})

module.exports = mongoose.model("Session", sessionSchema);