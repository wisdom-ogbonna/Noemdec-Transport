import bcrypt from "bcrypt";
import User from "../models/userModel.js";


export const RegisterController = async (req, res, next) => {
    try {
        const chashpassword = bcrypt.hashSync(req.body.password, 10);
        const newRegister = new User({
          username: req.body.username,
          email: req.body.email,
          password: chashpassword
        })
        const saveRegister = await newRegister.save()
        return res.status(200).json("User created successfully")
      } catch (err) {
        next(err)
      }

};

export const LoginController = async (req, res, next) => {


    try {
        const { username, password } = req.body;
    
        // Find the user in the database
        const user = await User.findOne({ username });
    
        // Check if the user exists
        if (!user) {
          return res.status(401).json({ error: 'Invalid username or password' });
        }
    
        // Compare the password with the stored hash
        const passwordMatch = await bcrypt.compare(password, user.password);
    
        // Check if the password matches
        if (!passwordMatch) {
          return res.status(401).json({ error: 'Invalid username or password' });
        }
    
        // Return a success response
        res.status(200).json({ message: 'Login successful' });
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
}
