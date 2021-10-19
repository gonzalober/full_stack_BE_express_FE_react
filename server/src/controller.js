const client = require("./databasepg");

const getCars = (req, res) => {
  console.log("getting cars");
  client.query("SELECT * FROM cars", (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
  console.log("AFTER");
};

module.exports = { getCars };
