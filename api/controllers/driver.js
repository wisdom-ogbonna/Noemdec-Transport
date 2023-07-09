import Driver from '../models/driverModel.js'

export const CreateDriver = async (req, res, next) => {

    try {
        const { name, age, licenseNumber } = req.body;
    
        // Check if the license number already exists
        const existingDriver = await Driver.findOne({ licenseNumber });
        if (existingDriver) {
          return res.status(409).json({ error: 'License number already exists' });
        }
    
        // Create a new driver object
        const newDriver = new Driver({
          name,
          age,
          licenseNumber
          // Other driver properties
        });
    
        // Save the driver to the database
        await newDriver.save();
    
        // Return a success response
        res.status(201).json({ message: 'Driver created successfully', driver: newDriver });
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }

}

export const GetDriver = async (req, res, next) => {

    try {
        // Retrieve all drivers from the database
        const drivers = await Driver.find();
    
        // Return the drivers
        res.status(200).json({ drivers });
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
}