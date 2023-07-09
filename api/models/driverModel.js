import mongoose from 'mongoose'

const Schema = mongoose.Schema;

// Create a driver schema

const driverSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    licenseNumber: {
        type: String,
        required: true,
        unique: true
    },
    // Other driver properties
});

// Create a driver model
export default mongoose.model('Driver', driverSchema)