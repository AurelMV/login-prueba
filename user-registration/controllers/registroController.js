class RegistroController {
  constructor() {
    this.users = []; // Array to store user data
  }

  registerUser(req, res) {
    const { name, email, password, userType } = req.body;

    // Simple validation
    if (!name || !email || !password || !userType) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    // Check if passwords match
    if (req.body.password !== req.body.confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match." });
    }

    // Create user object
    const newUser = {
      name,
      email,
      password, // In a real application, make sure to hash the password
      userType,
    };

    // Store user data
    this.users.push(newUser);

    // Respond with success message
    return res
      .status(201)
      .json({ message: "User registered successfully!", user: newUser });
  }
}

module.exports = RegistroController;
