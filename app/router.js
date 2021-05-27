'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  app.httpclient.on('request', req => {
    const headers = req.ctx.request.headers;
    req.ctx.request.headers = {
      ...headers,
      traceId: 'xxx',
    };
    app.logger.info('Node request headers', req.ctx.request.headers);
  });

  router.get('/', controller.home.index);
  router.get('/test', controller.home.test);
};
