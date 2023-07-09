import Vehicle from "../models/vehicleModel.js";

export const CreateVehicle = async (req, res, next) => {
  try {
    const { make, model } = req.body;
    const vehicle = new Vehicle({ make, model });
    await vehicle.save();
    res.status(201).json(vehicle);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create vehicle' });
  }

}

export const GetVehicle = async (req, res, next) => {
    try {
        const vehicles = await Vehicle.find();
        res.json(vehicles);
      } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve vehicles' });
      }
  
  }