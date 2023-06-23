const express = require('express');
const app = express();
const port = 3000;

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/users', (req, res) => {
    // Extract user data from the request body
    const { name, email, password } = req.body;
    // Create a new user object with the provided data
    const newUser = {
      name,
      email,
      password
    };
    // Send a success response
    res.status(201).json({
      message: 'User created successfully',
      user: newUser
    });
  });
  

    app.get('/users/:id', (req, res) => {
        // Get the user ID from the request parameters
        const userId = req.params.id;
      
        // Find the user with the provided ID in the database or any other data source
        // Example: Assuming users is an array of user objects
        const user = users.find(user => user.id === userId);
      
        // Check if the user is found
        if (user) {
          // If the user is found, send the user data in the response
          res.json({
            message: 'User found',
            user: user
          });
        } else {
          // If the user is not found, send an error response
          res.status(404).json({
            message: 'User not found'
          });
        }
      });
      
      app.put('/users/:id', (req, res) => {
        // Get the user ID from the request parameters
        const userId = req.params.id;
      
        // Find the user with the provided ID in the database or any other data source
        // Example: Assuming users is an array of user objects
        const user = users.find(user => user.id === userId);
      
        // Check if the user is found
        if (user) {
          // Update the user's information based on the data in the request body
          user.name = req.body.name;
          user.email = req.body.email;
          // Add any other properties you want to update
      
          // Send a success response
          res.json({
            message: 'User updated successfully',
            user: user
          });
        } else {
          // If the user is not found, send an error response
          res.status(404).json({
            message: 'User not found'
          });
        }
      });
      
      app.delete('/users/:id', (req, res) => {
        // Get the user ID from the request parameters
        const userId = req.params.id;
      
        // Find the index of the user with the provided ID in the database or any other data source
        // Example: Assuming users is an array of user objects
        const userIndex = users.findIndex(user => user.id === userId);
      
        // Check if the user is found
        if (userIndex !== -1) {
          // Remove the user from the data source
          users.splice(userIndex, 1);
      
          // Send a success response
          res.json({
            message: 'User deleted successfully'
          });
        } else {
          // If the user is not found, send an error response
          res.status(404).json({
            message: 'User not found'
          });
        }
      });
      

// Error handling middleware
app.use((err, req, res, next) => {
  // Handle the error
  console.error(err);

  // Set an appropriate status code
  res.status(500);

  // Send an error response
  res.json({
    error: 'Internal Server Error'
  });
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  // Handle the error
  console.error('Uncaught Exception:', err);

  // Perform any necessary cleanup
  process.exit(1); // Exit the process with a non-zero status code
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
