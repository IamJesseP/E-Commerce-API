const express = require('express');
const auth = require('../controllers/authController');
const user = require('../controllers/userController');

const router = express.Router();

router.route('/').get(user.getAllUsers);
router.route('/showMe').get(user.showCurrentUser);
router.route('/updateUser').patch(user.updateUser);
router.route('/updateUserPassword').patch(user.updateUserPassword);

router.route('/:id').get(user.getSingleUser);

module.exports = router;
