'use strict';

const createRule = {
  accesstoken: 'string',
  title: 'string',
  tab: {
    type: 'enum',
    values: [ 'ask', 'share', 'job' ],
    required: false,
  },
  content: 'string',
};

exports.create = function* (ctx) {
  ctx.validate(createRule); // 参数校验

  // 调用 service 创建一个 topic
  const id = yield ctx.service.topics.create(ctx.request.body);

  // 设置响应体和状态码
  ctx.body = {
    topic_id: id,
  };
  ctx.status = 201;
};
