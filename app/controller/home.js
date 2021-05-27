'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    // 假设这是外部url
    ctx.curl('http://127.0.0.1:7001/test');

    ctx.body = 'hi, egg';
  }

  async test() {
    const { ctx } = this;
    // 此处的headers，不含有之前的traceId: 'xxx':
    // {
    //   'user-agent': 'node-urllib/2.37.1 Node.js/14.16.0 (OS X; x64)',
    //   host: '127.0.0.1:7001',
    //   connection: 'keep-alive'
    // }
    ctx.logger.info('Curl headers', ctx.request.headers);

    ctx.body = 'test';
  }
}

module.exports = HomeController;
