'use strict';

module.exports = options => {
  return async function TestABD(ctx, next) {
    await next();
  };
};
