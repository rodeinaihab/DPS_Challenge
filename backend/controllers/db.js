const mongoose = require("mongoose");

//connection to the DB
//async func resolved with await keyword
const uri = process.env.MONGO_URI || "mongodb+srv://admin:admin@bookfinder.bgsxx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const connect = async () => {
    try{
        await mongoose.connect(uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("Connectd to DB");
    } catch (err){
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = { connect };

