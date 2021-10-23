const client = require("./databasepg");
const queries = require("./queries");

const getCars = (req, res) => {
  console.log("getting cars");
  client.query(queries.getCars, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
  console.log("AFTER");
};

const getCarsById = (req, res) => {
  const id = parseInt(req.params.id);
  client.query(queries.getCarsById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addCars = (req, res) => {
  const { make, model, color, year, origin } = req.body;
  if (make && model && color) {
    client.query(
      queries.addCars,
      [make, model, color, year, origin],
      (error, results) => {
        if (error) throw error;
        res.status(201).send("Car added succesfully");
      }
    );
  } else {
    res.status(500).json({ error: "There was an error." });
  }
};

const removeCar = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  client.query(queries.getCarsById, [id], (error, results) => {
    const noCarFound = !results.rows.length;
    if (noCarFound) {
      res.send("The car does not exist in the database");
      return;
    }

    client.query(queries.removeCar, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Car removed succesfully");
      return;
    });
  });
};

const updateCar = (req, res) => {
  const id = parseInt(req.params.id);
  const { make } = req.body;
  client.query(queries.getCarsById, [id], (error, results) => {
    const noCarFound = !results.rows.length;
    if (noCarFound) {
      res.send("The car does not exist in the database");
      return;
    }

    client.query(queries.updateCar, [make, id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Car was updated succesfully");
      return;
    });
  });
};

module.exports = { getCars, getCarsById, addCars, removeCar, updateCar };
