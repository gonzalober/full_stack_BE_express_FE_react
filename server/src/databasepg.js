const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "rootUser",
  database: "postgres",
});

client.connect();

client.query("Select * from users", (err, res) => {
  if (!err) {
    console.log(res.row);
  } else {
    console.log(err.message);
  }
});