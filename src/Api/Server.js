import express from "express";
import cors from "cors";
import "./Connection/Connection.js";
import bodyParser from "body-parser";
import router from "../Api/route/routes.js";




const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 8080;

app.use("/user", router);

app.listen(port, (err) => {
  if (!err) {
    console.log(`Server listening port no ${port}`);
  }
});
