const mongoose = require("mongoose");

//uri = "mongodb+srv://manasdubey512:m1a2n3a4s5@api.rx2jt.mongodb.net/api?retryWrites=true&w=majority&appName=api";
// because uri is called as parameter
const connectDB = (uri) => {
    //console.log("ho gya");
    
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,

    } );
};
module.exports = connectDB;