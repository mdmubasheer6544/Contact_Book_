import dotenv from "dotenv";
dotenv.config()
import mongoose from "mongoose";

const mongoString = process.env.REACT_APP_MONGODB_STRING;
mongoose
  .connect(mongoString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection sucess!");
  })
  .catch((err) => {
    console.log("Error", err.message);
  });

mongoose.Promise = global.Promise;
