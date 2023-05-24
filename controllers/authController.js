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
  res.send('login user');
};
const logout = async (req, res) => {
  res.send('logout user');
};

module.exports = {
  register,
  login,
  logout,
};