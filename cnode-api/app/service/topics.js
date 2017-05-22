'use strict';

module.exports = app => {
  class TopicService extends app.Service {
    constructor(ctx) {
      super(ctx);

      this.root = 'https://cnodejs.org/api/v1';
    }
    * create(params) {
      const result = yield this.ctx.curl(`${this.root}/topics`, {
        method: 'post',
        data: params,
        dataType: 'json',
        contentType: 'json',
      });

            // 检查调用是否成功
      this.checkSuccess(result);

      return result.data.topic_id;
    }
    checkSuccess(result) {

            // 失败
      if (result.status !== 200) {
        const errorMsg = result.data && result.data.error_msg ? result.data.error_msg : 'unknown';
        this.ctx.throw(result.status, errorMsg);
      }

            // 远程调用返回格式
      if (!result.data.success) {
        this.ctx.throw(500, 'remote response error', {
          data: result.data,
        });
      }
    }
    }

  return TopicService;
};
