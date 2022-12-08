const { Router } = require("express");
const menuController = require("../controllers/menuController");

const menuRouter = Router();

menuRouter.get("/all", menuController.getAll);
menuRouter.get("/get-by-id/:id", menuController.getOne);
menuRouter.get("/search", menuController.getItemsBySearchValue);
menuRouter.post("/", menuController.create);
menuRouter.put("/:id", menuController.updateItemById);
menuRouter.delete("/:id", menuController.deleteItemById);

module.exports = menuRouter;
