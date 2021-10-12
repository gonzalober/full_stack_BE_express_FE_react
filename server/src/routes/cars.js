const { Router } = require("express");
const router = new Router();

const cars = require("../carsData.json");

router.get("/", (req, res) => {
  res.json(cars);
});

router.route("/add").post((req, res) => {
  const car = { id: (cars.length + 1).toString(), ...req.body };
  if (car.id && car.make && car.model) {
    cars.push(car);
    res.json(car);
  } else {
    res.status(500).json({ error: "There was an error." });
  }
});

router.route("/:id").delete((req, res) => {
  const { id } = req.params;
  if (id) {
    cars.forEach((car, index) => {
      if (car.id == id) {
        cars.splice(index, 1);
      }
    });
    console.log(cars);
    res.json(cars);
  }
});

module.exports = router;
