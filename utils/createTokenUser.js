/* eslint-disable no-underscore-dangle */

const createTokenUser = (user) => ({
  name: user.name,
  userId: user._id,
  role: user.role,
});
module.exports = createTokenUser;
