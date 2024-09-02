import mongoose from "mongoose";

const registerSchema  = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
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
    password: {
        type: String,
        required: true
    },
});

registerSchema.set('autoIndex', true);

const register = mongoose.model('Register', registerSchema);
export default register;
