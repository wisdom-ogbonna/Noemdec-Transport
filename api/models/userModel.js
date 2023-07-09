import mongoose from 'mongoose'

const Schema = mongoose.Schema;


const registerSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
},)

export default mongoose.model('User', registerSchema)