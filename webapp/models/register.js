const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//import mongoose from "mongoose";
//import bcrypt from "bcrypt";

const registerSchema  = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
});

registerSchema.pre("save", async function(next) {

    if (!this.isModified("password")) {
        return next(); 
    }
    try {
        const hashedpw = await bcrypt.hash(this.password, 10);
        this.password = hashedpw;
        next();
    }catch(error) {
        next(error);
    }
    
})

registerSchema.set("autoIndex", true);

const Register = mongoose.model("Register", registerSchema);

module.exports = Register;
//export default Register;