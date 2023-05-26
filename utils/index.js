const { createJWT, isTokenValid, attachCookiesToRes } = require('./jwt');
const createTokenUser = require('./createTokenUser');
const checkPermissions = require('./checkPermissions');

module.exports = {
  createJWT,
  isTokenValid,
  attachCookiesToRes,
  createTokenUser,
  checkPermissions,
};
