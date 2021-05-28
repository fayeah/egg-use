'use strict';

class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  async serverDidReady() {
    // http / https server 已启动，开始接受外部请求
    // 此时可以从 app.server 拿到 server 的实例

    this.app.server.on('timeout', socket => {
      this.app.logger.error('Timeout ...');
      this.app.logger.error(socket);
    });
  }
}

module.exports = AppBootHook;
