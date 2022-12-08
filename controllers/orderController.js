const Order = require("../db/models/orders.js");
const Items = require("../db/models/menuItems.js");

const getAll = async (req, res) => {
  try {
    const orders = await Order.getAll();
    res.send(orders);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getOne = async (req, res) => {
  try {
    const order = await Order.getOne(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send("Order not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const create = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.send(order);
  } catch (error) {
    res.status(500).send(error);
  }
};

const update = async (req, res) => {
  try {
    const order = await Order.update(req.params.id, req.body);
    res.send(order);
  } catch (error) {
    res.status(500).send(error);
  }
};

const remove = async (req, res) => {
  try {
    const order = await Order.remove(req.params.id);
    res.send(order);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getByCustomer = async (req, res) => {
  try {
    const orders = await Order.getByCustomer(req.params.id);
    res.send(orders);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getByStatus = async (req, res) => {
  try {
    const orders = await Order.getByStatus(req.params.status);
    res.send(orders);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getTotalSales = async (req, res) => {
  try {
    let total = 0;
    const menuItems = await Items.getAll();
    const allOrderedItems = await Order.getTotalItemsByDateRange();
    allOrderedItems.forEach((item) => {
      const theItem = menuItems.find(
        // eslint-disable-next-line no-underscore-dangle
        (i) => i._id.toString() === item.item.toString()
      );
      if (theItem) {
        const subtotal = theItem.price * item.quantity;
        total += subtotal;
      }
    });

    const grandTotal = { TOTAL: total };
    res.send(grandTotal);
  } catch (error) {
    res.sendStatus(500).send(error);
  }
};

module.exports = {
  getAll,
  getOne,
  getTotalSales,
  create,
  update,
  remove,
  getByCustomer,
  getByStatus
};
