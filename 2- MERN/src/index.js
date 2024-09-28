import app from "./app.js";

// pool.query("SELECT NOW()", (err, res) => {
//   console.log(err, res.rows);
//   pool.end();
// });


app.listen(3000);
console.log("Server on port http://localhost:3000");