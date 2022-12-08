const MenuItems = require("../db/models/menuItems.js");

const getAll = async (req, res) => {
  try {
    const menu = await MenuItems.getAll();
    res.send(menu);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getOne = async (req, res) => {
  try {
    const menu = await MenuItems.getOne(req.params.id);
    res.send(menu);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getItemsBySearchValue = async (req, res) => {
  try {
    const menuItems = await MenuItems.getItemsBySearchValue(req.query.q);
    res.send(menuItems);
  } catch (error) {
    res.status(500).send(error);
  }
};

const create = async (req, res) => {
  try {
    const menu = await MenuItems.create(req.body);
    res.send(menu);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateItemById = async (req, res) => {
  try {
    const updatedItem = await MenuItems.updateById(req.params.id, req.body);
    res.send(updatedItem);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteItemById = async (req, res) => {
  try {
    const deletedItemId = await MenuItems.deleteItemById(req.params.id);
    res.send(deletedItemId);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAll,
  getOne,
  getItemsBySearchValue,
  create,
  updateItemById,
  deleteItemById
};
