const mongoose = require("mongoose");
require("dotenv")


mongoose
  .connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true  })
  .then(() => {
    console.log("Connected to the db");
  })
  .catch(err => {
    console.log(err);
  });
