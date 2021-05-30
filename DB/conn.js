const mongoose = require("mongoose");

const URI = "mongodb+srv://rishabh:1234@cluster0.dg2dg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const connectDB = async () => {
    await mongoose.connect(URI,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        });
    console.log('db connected')
}
module.exports = connectDB;