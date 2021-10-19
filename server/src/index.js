const express = require("express");
const app = express();
const carsRoutes = require("./routes/cars");
let cors = require("cors");
app.use(cors());
const port = 4000;

app.use(express.json());

app.get("/", (req, res) => res.send("HELLO WORLD"));

app.use("/api/cars", carsRoutes);

app.listen(port, () => console.log(`Server on port ${port}`));
