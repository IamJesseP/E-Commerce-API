const express = require('express');
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication');
const {
  createOrder,
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  updateOrders,
} = require('../controllers/orderController');

const router = express.Router();

router.post('/', authenticateUser, createOrder);
router.get('/', authenticateUser, authorizePermissions('admin'), getAllOrders);

router.get('/showAllMyOrders', authenticateUser, getCurrentUserOrders);
router.patch('/:id', authenticateUser, updateOrders);
router.get('/:id', authenticateUser, getSingleOrder);

module.exports = router;
