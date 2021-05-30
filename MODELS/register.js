const mongoose = require('mongoose');
const bcrypt = require("bcryptjs")
const userSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    about:{
        type:String,
        required:true
    },
    confirm: {
        type: String,
        required: true,
    },
    profileImage:{
        type:String,
        required:true
    }
})

// save method k call karne se pehle password bcrypt karo
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {

        this.password = await bcrypt.hash(this.password, 10);
        this.confirm = await bcrypt.hash(this.confirm, 10)
    }
    next()
})


const Register = new mongoose.model('Register', userSchema)
module.exports = Register