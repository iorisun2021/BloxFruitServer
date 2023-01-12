import Fruit from "../models/fruit";
import { hashPassword, comparePassword } from "../helpers/auth";
import jwt from "jsonwebtoken";
import nanoid from "nanoid";

export const addFruit = async (req, res) => {
  console.log("ADD FRUIT");
  try {
    const { name, dollar, robux, availableLevel, imageUrl } = req.body;
    // validation
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }

    const exist = await Fruit.findOne({ name });
    if (exist) {
      return res.json({
        error: "Fruit Name is taken",
      });
    }

    const fruit = await new Fruit({
      name,
      dollar,
      robux,
      availableLevel,
      imageUrl,
    }).save();

    return res.json(fruit);
  } catch (err) {
    console.log(err);
  }
};

export const getFruits = async (req, res) => {
  // console.log(req.body);
  try {
    const fruit = await Fruit.find();
    return res.json(fruit);
  } catch (err) {
    console.log(err);
  }
};

export const search = async (req, res) => {
  try {
    const result = (await Fruit.where("name")) == "Kilo";
    return res.json(result);
  } catch (err) {
    console.log(err);
  }
};

export const deleteFruit = async (req, res) => {
  const { id } = req.params;
  try {
    console.log("delete a user => " + id);
    const fruit = await Fruit.findByIdAndDelete(id);
    console.log("user deleted");
    return res.json(fruit);
    return;
  } catch (err) {
    console.log(err);
  }
};
