// import module

const arr=[2,6,8,7,3,4];
console.log(arr[0])
console.log(arr[3])


// asynchronous function 

let a = 20;
let b = 30;
let waitingdata = new Promise((resolve, reject) => {
setTimeout(() => {
 resolve(30)
},2000); 
})
console.log(a+b)


//web server using express js

const express = require('express')
const app = express()

// curd operation

const { json } = require('express');
const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname, 'apple.txt');
const filepath = `${dirpath}/appendFile.txt`;

// Check if the file exists before attempting to delete it
if (fs.existsSync(dirpath)) {
fs.unlink(filepath, (err) => {
   if (err) {
     console.error('Error deleting the file:', err);
    } else {
      console.log('File deleted successfully');
    }
  });
} else {
  console.log('File does not exist');
}


//create RESTful APIs with Node.js and Express.js.


//GET request to the root URL

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

//POST request to '/users' to create a new user

app.post('/users', (req, res) => {
  const User = require('./models/user'); // Import the user model

// Route handler for creating a new user
app.post('/users', (req, res) => {
  // Extract user information from the request body
  const { username, email, password } = req.body;

  // Perform validation, e.g., check for required fields
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Please provide all required fields' });
  }
});

  // Create a new user object
  const newUser = new User({
    username,
    email,
    password
  });

  // Save the user object to the database
  newUser.save()
    .then(() => {
      // User successfully created
      res.status(201).json({ message: 'User created successfully' });
    })
    .catch((error) => {
      // Error occurred while saving the user
      console.error(error);
      res.status(500).json({ error: 'Failed to create user' });
    });
});

//GET request to '/users/:id' to get a specific user
  app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
  
    // Code to get a specific user by ID
    User.findById(userId, (err, user) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else if (!user) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.json(user);
      }
    });
  });


//PUT request to '/users/:id' to update a specific user

app.put('/users/:id', (req, res) => {
  
  app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const updatedUserData = req.body;
  
    // Code to update a specific user by ID
    
    User.findByIdAndUpdate(userId, updatedUserData, { new: true }, (err, user) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else if (!user) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.json(user);
      }
    });
  });
});

//DELETE request to '/users/:id' to delete a specific user

app.delete('/users/:id', (req, res) => {
  
  app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
  
    // Code to delete a specific user by ID

    User.findByIdAndDelete(userId, (err, user) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else if (!user) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.json({ message: 'User deleted successfully' });
      }
    });
  });
});
  


//error handling techniques 

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
process.on('uncaughtException', (err) => {
  // Handle the error
  console.error('Uncaught Exception:', err);

  // Perform any necessary cleanup
  process.exit(1); // Exit the process with a non-zero status code
});

//Day 2
// middleware routes

//const express = require ('express');
//const app = express();
const reqfilter = (req, res, next) =>{
  if(!req.query.age)
  {
    resp.send("please provide age")
  }
      else if(req.query.age<18)
    {
    resp.send("you can not access this page")
  }
  else {
next();
}
};
//app.use(reqfilter)
app.get('/', (req, resp) => {
  resp.send('welcome to my dom');
});
app.get('/users', (req, resp) => {
  resp.send('welcome to user page');

});
app.get('/home', (req, resp) => {
  resp.send('welcome to home page');

});
//const port = 3000;
//app.listen(port, () => {
//console.log(`Server is running on port ${port}`);
//});
   
//routes for different HTTP methods.

//const express = require('express');
//const app = express();

app.get('/users', (req, res) => {
  res.send('List of users');
});
app.get('/users', (req, res) => {
  // Get all users
});

app.post('/users', (req, res) => {
  // Create a new user
});



//EJS, ,

app.set('view engine', 'ejs'); // Set EJS as the templating engine

app.get('/', (req, res) => {
  const data = {
    title: 'Dynamic Page',
    message: 'Hello, World!'
  };
  res.render('index', data); // Render the 'index.ejs' template with data
});


//Handlebars

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs.create({ /* options */ }).engine);
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
  const data = {
   title: 'Dynamic Page',
   message: 'Hello, World!'
 };
 res.render('index', data);
});


app.set('view engine', 'pug');

app.get('/', (req, res) => {
  const data = {
    title: 'Dynamic Page',
    message: 'Hello, World!'
  };
  res.render('index', data);
});


// middleware routes
//const express = require('express');
//const app = express();

//const express = require('express');
//const app = express();



//app.use('/', reqfilter);

app.get('/', (req, res) => {
  res.send('Welcome to my dom');
});

app.get('/users', (req, res) => {
  res.send('Welcome to the user page');
});

app.get('/home', (req, res) => {
  res.send('Welcome to the home page');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

