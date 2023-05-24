/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const User = require('../models/User');
const { attachCookiesToRes } = require('../utils/index');

const register = async (req, res) => {
  const { email, name, password } = req.body;
  const user = await User.create({ name, email, password });

  const tokenUser = { name: user.name, userId: user._id, role: user.role };
  attachCookiesToRes({ res, user: tokenUser });
  res.status(StatusCodes.CREATED).json({ user: tokenUser });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new CustomError.BadRequestError('Please provide email and password');
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new CustomError.UnauthenticatedError('Invalid email or password');
  }

  const validPassword = user.comparePassword(password);
  if (!validPassword) {
    throw new CustomError.UnauthenticatedError('Invalid email or password');
  }

  const tokenUser = { name: user.name, userId: user._id, role: user.role };
  attachCookiesToRes({ res, user: tokenUser });
  res.status(StatusCodes.CREATED).json({ user: tokenUser });
};

const logout = async (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.send('Logout successful');
};

module.exports = {
  register,
  login,
  logout,
};
