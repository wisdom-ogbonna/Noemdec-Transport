import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const vehicleSchema = new Schema({

    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    // Other vehicle properties
});

// Create a vehicle model
export default mongoose.model('Vehicle', vehicleSchema)
