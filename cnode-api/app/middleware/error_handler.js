'use strict';

module.exports = () => {
  return function* (next) {
    try {
      yield next;
    } catch (err) {
      this.app.emit('error', err, this); // 所有的错误都会触发一个 error 事件，并记录一条日志
      const status = err.status || 500;

            // 屏蔽 500 错误信息给到前端
      const error = status === 500 && this.app.config.env === 'prod' ? 'Internal Server Error' : err.message;

            // 从 error 对象上读出各个属性，设置到响应中
      this.body = { error };
      if (status === 422) {
        this.body.detail = err.errors;
      }
      this.status = status;
    }
  };
};
