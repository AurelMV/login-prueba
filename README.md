# User Registration Project

This project is a simple user registration module built with Node.js and Express. It allows users to register by providing their name, email, password, and user type. The application includes front-end validation and a back-end structure to handle user data.

## Project Structure

```
user-registration
├── app.js                  # Entry point of the application
├── controllers             # Contains controller files
│   └── registroController.js # Handles user registration logic
├── models                  # Contains model files
│   └── usuario.js          # Defines the User model
├── public                  # Contains public assets
│   ├── css
│   │   └── tailwind.css    # Tailwind CSS styles
│   └── js
│       └── registro.js      # JavaScript for form validation and interactivity
├── routes                  # Contains route definitions
│   └── registro.js         # Defines routes for user registration
├── views                   # Contains view templates
│   └── registro.ejs        # EJS template for the registration form
└── README.md               # Project documentation
```

## Features

- User registration form with fields for name, email, password, and user type.
- Front-end validation for required fields, valid email format, and matching passwords.
- Dynamic error and success messages displayed to the user.
- Simple back-end structure to handle form submissions and store user data.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd user-registration
   ```

3. Install the required dependencies:
   ```
   npm install
   ```

4. Start the application:
   ```
   node app.js
   ```

5. Open your browser and navigate to `http://localhost:3000/registro` to access the registration form.

## Usage

Fill out the registration form with the required information and submit. The application will validate the input and provide feedback. Upon successful registration, the user data will be processed and stored.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.