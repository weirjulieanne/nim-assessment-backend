const { Router } = require("express");
const menuController = require("../controllers/menuController");

const menuRouter = Router();

menuRouter.get("/", menuController.getAll);
menuRouter.get("/:id", menuController.getOne);
menuRouter.post("/", menuController.create);
menuRouter.put("/:id", menuController.updateItemById);
menuRouter.delete("/:id", menuController.deleteItemById);

module.exports = menuRouter;
