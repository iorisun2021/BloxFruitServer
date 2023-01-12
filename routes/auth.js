import express from "express";

const router = express.Router();

// controllers
const {
  signup,
  signin,
  forgotPassword,
  resetPassword,
  getUsers,
  deleteUser,
  updateUser,
} = require("../controllers/auth");

router.get("/", (req, res) => {
  return res.json({
    data: "hello world from kaloraat auth API",
  });
});
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.get("/get-users", getUsers);
router.delete("/delete-user/:id", deleteUser);
router.put("/update-user/:id", updateUser);

module.exports = router;

export default router;
