// module.exports ={
//     x:20,
//     y:30,
//     z:function(){
//         return 10;
//     }
// }

// const express = require('express');
// const app = express();
// app.set('view engine', 'ejs'); // Set EJS as the view engine
// app.set('views', __dirname + '/views'); // Set the directory for your views
// app.get('/', (req, res) => {
//     const data = {
//       title: 'Dynamic Page',
//       message: 'Hello, World!'
//     };
//     res.render('index', data);
//   });
//   app.listen(3000, () => {
//     console.log('Server is running on port 3000');
//   });
  
//   app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');
// app.get('/', (req, res) => {
//     const data = {
//       title: 'Dynamic Page',
//       message: 'Hello, World!'
//     };
//     res.render('index', data);
//   });
  
//built-in File System module
//readfile
  
// const fs = require('fs');
//   fs.readFile('file.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });


//writefile
// const fs = require('fs');

// const data = 'Hello, World!';

// fs.writeFile('file.txt', data, 'utf8', (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('File has been written successfully.');
// });

//Update a file:

// const fs = require('fs');

// const newData = 'New data to append to the file.';

// fs.appendFile('file.txt', newData, 'utf8', (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('Data has been appended to the file.');
// });


//Delete a file:

// const fs = require('fs');

// fs.unlink('file.txt', (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('File has been deleted successfully.');
// });

//read from and write to files
//Read from a file:

// const fs = require('fs');

// fs.readFile('file.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });



//Write to a file:
// const fs = require('fs');

// const data = 'Hello, World!';

// fs.writeFile('file.txt', data, 'utf8', (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('File has been written successfully.');
// });


//Create a directory:

// const fs = require('fs');

// fs.mkdir('new-directory', (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('Directory has been created successfully.');
// });

//Handle file-related errors:

// const fs = require('fs');

// try {
//   const data = fs.readFileSync('file.txt', 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }


//  requireAuth = (req, res, next) => {
//     if (req.session && req.session.isAuthenticated) {
//       // User is authenticated, proceed to the next middleware or route handler
//       next();
//     } else {
//       // User is not authenticated, redirect to the login page or send an error response
//       res.redirect('/login');
//     }
//   };
 
// const express = require('express');
// const app = express();

// // Apply authentication middleware to protect the route
// app.get('/protected-route', requireAuth, (req, res) => {
//   // Route handler for the protected route
//   res.send('You have accessed the protected route.');
// });

//   app.get('/logout', (req, res) => {
//     req.session.destroy((err) => {
//       if (err) {
//         console.error(err);
//       }
//       res.redirect('/login');
//     });
//   });const
  


// server side code

// const app = require('express')();
// const server = require('http').createServer(app);
// const io = require('socket.io')(server);

// // Handle socket connection
// io.on('connection', (socket) => {
//   console.log('A user connected');

//   // Handle events
//   socket.on('chat message', (message) => {
//     console.log('Received message:', message);
//     // Broadcast the message to all connected clients
//     io.emit('chat message', message);
//   });

//   // Handle disconnection
//   socket.on('disconnect', () => {
//     console.log('A user disconnected');
//   });
// });

// // Start the server
// server.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

//websocket server side programing

// const WebSocket = require('ws');

// const wss = new WebSocket.Server({ port: 3000 });

// // Handle socket connection
// wss.on('connection', (ws) => {
//   console.log('A user connected');

//   // Handle messages
//   ws.on('message', (message) => {
//     console.log('Received message:', message);
//     // Send a message to the client
//     ws.send('Hello, Client!');
//   });

//   // Handle disconnection
//   ws.on('close', () => {
//     console.log('A user disconnected');
//   });
// });



