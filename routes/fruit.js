import express from "express";

const router = express.Router();
const text = new String();

// controllers
const {
  addFruit,
  getFruits,
  search,
  deleteFruit,
} = require("../controllers/fruit");
router.post("/add-fruit", addFruit);
router.get("/get-fruits", getFruits);
router.get("/search", search);
router.delete("/delete-fruit/:id", deleteFruit);

export default router;
