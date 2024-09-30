import mongoose from "mongoose";
import bcrypt from "bcrypt";

const registerSchema  = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email_address: {
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
export default Register;
