const mongoose = require("mongoose")
const watchSchema = mongoose.Schema({
    Name:  {
        type: String,
        required: [true, "Name of watch can not be blank"]
    },
    Company: {
        type: String,
        required: [true, "watch company can not be blank"]
    },
    Price: {
        type: Number,
        required: [true, "Price of the watch is required"],
        min: [100, "watch price Should be minimum of $100 "],
        max: [5000, "watch price Cannot be greater than $5000 "]

    }
})
module.exports = mongoose.model("Watch", watchSchema)