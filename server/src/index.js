const express = require("express");
const app = express();
const carsRoutes = require("./routes/cars");

const port = 4000;

app.use(express.json());

app.get("/", (req, res) => res.send("HELLO WORLD"));

app.use("/api/cars", carsRoutes);

app.listen(port, () => console.log(`Server on port ${port}`));

//var cors = require("cors");

// app.set("port", process.env.PORT || 4000);
// app.use(cors());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
