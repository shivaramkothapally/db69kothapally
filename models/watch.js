const mongoose = require("mongoose")
const watchSchema = mongoose.Schema({
    Name: String,
    Company: String,
    Price: String
})
module.exports = mongoose.model("Watch", watchSchema)