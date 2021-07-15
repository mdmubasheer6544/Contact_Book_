import { transformAsync } from "@babel/core";
import express from "express";
import User from "../Modal/user-Schema.js";

const router = express.Router();

router.post("/add", async (req, res) => {
  const user = req.body;
  const newUser = new User(user);

  try {
    let user = await newUser.save();
    res.json(user);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    let user = await User.find();
    res.json(user);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const user = req.body;
  const editUser = new User(user);

  try {
    let user = await User.updateOne({ _id: req.params.id }, editUser);
    res.json(user);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let user = await User.deleteOne({ _id: id });
    res.json(user);
  } catch (error) {
    res.json({ message: error.message });
  }
});

export default router;
