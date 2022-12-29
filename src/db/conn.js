const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/xtar",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("Connection was Established");
}).catch((err) => {
    console.log("Connection Faild " + err)
});