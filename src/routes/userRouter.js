const express = require("express");

const UserController = require("../controllers/userController");

const router = express.Router();//* o router permite a criação de várias rotas a partir de um caminho

router.get("/:id", UserController.show);
router.get("/", UserController.index);
router.post("/", UserController.save);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.remove);

module.exports = router;