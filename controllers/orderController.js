const createOrder = async (req, res) => {
  res.send('create order');
};
const getAllOrders = async (req, res) => {
  res.send('get all orders');
};
const getSingleOrder = async (req, res) => {
  res.send('get single order');
};
const getCurrentUserOrders = async (req, res) => {
  res.send('get current user order');
};
const updateOrders = async (req, res) => {
  res.send('update order');
};

module.exports = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  updateOrders,
};
