const express = require('express');
const user = require('../controllers/userController');
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication');

const router = express.Router();

router
  .route('/')
  .get(
    authenticateUser,
    authorizePermissions('admin', 'user'),
    user.getAllUsers,
  );
router.route('/showMe').get(authenticateUser, user.showCurrentUser);
router.route('/updateUser').patch(user.updateUser);
router
  .route('/updateUserPassword')
  .patch(authenticateUser, user.updateUserPassword);

router.route('/:id').get(authenticateUser, user.getSingleUser);

module.exports = router;
