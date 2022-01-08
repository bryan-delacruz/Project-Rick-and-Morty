var express = require("express");
const usersRoutes = require("./users");
var router = express.Router();

// Import route files
router.use("/", (req, res) => {
  res.json({msg:"root api/v1/"});
});
router.use("/users", usersRoutes);

module.exports = router;
