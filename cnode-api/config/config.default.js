'use strict';

module.exports = {
  middleware: [ 'errorHandler' ],
  errorHandler: {
    match: '/api',
  },
  keys: '_' + new Date().getTime(),
};
