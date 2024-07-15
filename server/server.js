require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workouts");
const mongoose = require("mongoose");
// express app
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);

//connect to db
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port:", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// listen to requests