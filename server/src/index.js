const express = require("express");
var cors = require("cors");
const app = express();

app.set("port", process.env.PORT || 4000);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/cars", require("./routes/cars"));

app.listen(app.get("port"), () =>
  console.log(`Server on port ${app.get("port")}`)
);
