const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

const mysql = require('mysql2');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Pbandjelly27!',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

  // db.query(`SELECT * FROM candidates`, (err, rows) => {
  //  console.log(rows);
  //});

  // Delete a candidate
//db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
    //if (err) {
      //console.log(err);
    //}
    //console.log(result);
  //});

 // Get all candidates
app.get('/api/candidates', (req, res) => {
    const sql = `SELECT * FROM candidates`;
  
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });
  
// db.query(sql, params, (err, result) => {
// if (err) {
// console.log(err);
// }
// console.log(result);
// });

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
