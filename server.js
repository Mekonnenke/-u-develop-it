
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hello World'
//   });
// });



// Express middleware or connection router
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // Your MySQL username,
    user: 'mekotigi@gmail.com',
    // Your MySQL password
    password: 'hashHaset33*',
    database: 'election'
  },
  console.log('Connected to the election database.')
);


// Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();
// });


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});