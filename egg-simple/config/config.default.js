'use strict';

const path = require('path')
module.exports = appInfo => {
    const config = {
        keys: appInfo.name + '_1494560467588_4062',
        view: {
            root: path.join(appInfo.baseDir, 'app/view'),
            defaultExtension: '.tpl',
            defaultViewEngine: 'nunjucks',
            mapping: { '.nj': 'nunjucks' },
        },
        security: {
            csrf: {
                enable: false
            }
        },
        lists: {
            pageSize: 5,
            serverUrl: 'https://hacker-news.firebaseio.com/v0'
        },
        middleware: ['robot'],
        robot: {
            ua: [/Baiduspider/i]
        }
    };

    return config;
};
