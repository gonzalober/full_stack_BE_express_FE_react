const { Router } = require("express");
const router = new Router();
const controller = require("../controller");

router.get("/", (req, res) => {
  controller.getCars(req, res);
});

router.get("/:id", (req, res) => {
  controller.getCarsById(req, res);
});

router.post("/add", (req, res) => {
  controller.addCars(req, res);
});

router.delete("/:id", (req, res) => {
  controller.removeCar(req, res);
});

router.put("/:id", (req, res) => {
  controller.updateCar(req, res);
});

module.exports = router;
