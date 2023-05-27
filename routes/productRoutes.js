const express = require('express');
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication');

const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
} = require('../controllers/productController');

router.get('/', getAllProducts);
router.post(
  '/',
  authenticateUser,
  authorizePermissions('admin'),
  createProduct,
);
router.patch(
  '/:id',
  authenticateUser,
  authorizePermissions('admin'),
  updateProduct,
);
router.post(
  '/uploadImage',
  authenticateUser,
  authorizePermissions('admin'),
  uploadImage,
);
router.delete(
  '/:id',
  authenticateUser,
  authorizePermissions('admin'),
  deleteProduct,
);

router.get('/:id', getSingleProduct);

module.exports = router;
