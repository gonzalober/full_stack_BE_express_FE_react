const { Router } = require("express");
const router = new Router();
const controller = require("../controller");

router.get("/", (req, res) => {
  controller.getCars(req, res);
  // res.send("API ROUTES");
});

// res.send("USING API route");

router.route("/add").post((req, res) => {
  const car = { id: (cars.length + 1).toString(), ...req.body };
  if (car.id && car.make && car.model) {
    controller.push(car);
    res.json(car);
  } else {
    res.status(500).json({ error: "There was an error." });
  }
});

// router.route("/:id").delete((req, res) => {
//   const { id } = req.params;
//   if (id) {
//     cars.forEach((car, index) => {
//       if (car.id == id) {
//         cars.splice(index, 1);
//       }
//     });
//     console.log(cars);
//     res.json(cars);
//   }
// });

module.exports = router;
