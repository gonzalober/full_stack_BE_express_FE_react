const getCars = "SELECT * FROM cars";
const getCarsById = "SELECT * FROM cars WHERE id = $1";
const addCars =
  "INSERT INTO cars (make, model, color, year, origin) VALUES ($1, $2, $3, $4, $5)";

const removeCar = "DELETE FROM cars WHERE id = $1";
const updateCar = "UPDATE cars SET make = $1 WHERE id = $2";

module.exports = {
  getCars,
  getCarsById,
  addCars,
  removeCar,
  updateCar,
};
