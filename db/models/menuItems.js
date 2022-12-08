const mongoose = require("../db.js");

const menuItemsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
});
menuItemsSchema.set("toJSON", {
  virtuals: true
});
// menu model
const MenuItems = mongoose.model("MenuItems", menuItemsSchema);

const getAll = async () => {
  try {
    const menuItems = await MenuItems.find();
    return menuItems;
  } catch (error) {
    return error;
  }
};

const getOne = async (id) => {
  try {
    const menuItem = await MenuItems.findById(id);
    return menuItem;
  } catch (error) {
    return error;
  }
};
const getItemsBySearchValue = async (value) => {
  const regexValueCaseInsensitive = { $regex: value, $options: "i" };
  try {
    const returnedItems = await MenuItems.find({
      $or: [
        { name: regexValueCaseInsensitive },
        { description: regexValueCaseInsensitive }
      ]
    });
    return returnedItems;
  } catch (error) {
    return error;
  }
};

const create = async (body) => {
  try {
    const menuItem = await MenuItems.create(body);
    return menuItem;
  } catch (error) {
    return error;
  }
};

const updateById = async (id, body) => {
  try {
    const newObject = body;
    newObject.updatedAt = Date.now();
    const updatedItem = await MenuItems.findByIdAndUpdate(id, newObject, {
      new: true
    });
    return updatedItem;
  } catch (error) {
    return error;
  }
};

const deleteItemById = async (id) => {
  try {
    const deletedItem = await MenuItems.findByIdAndDelete(id);
    return deletedItem.id;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAll,
  getOne,
  create,
  MenuItems,
  updateById,
  deleteItemById,
  getItemsBySearchValue
};
