/* eslint-disable linebreak-style */
// 第一步: src/config/dev.js   配置 -- api: 'http://localhost:8080'
// 第二步：src/helper/axios.js 判断--  baseURL: url || config.server.api,（当前url地址，不是就替换配置的URL地址）
// 第三步：src/mock/index.js   这里是请求的模拟数据（模拟后端数据）
// 第四步：src/assets/js/alarmMonitorAPI.js   这里是当前页面的借口
// 第五步：src/views/alarmMonitor.vue         这里是vue页面获取请求数据

// const mock = require('./data/mock.json');
//
// module.exports = app => {
//     app.get('/mock/list/', (req, res) => {
//         res.json(mock);
//     });
// };
//

const Mock = require('mockjs');

module.exports = app => {
    app.get('/alarm/mockList', (req, res) => {
        const data = Mock.mock({
            'total': 20,
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'list|10-20': [{
                'id|+1': 1,
                'title': '@ctitle(15, 20)',
                'status': '@pick(["审核", "预申请", "转正", "正式", "已取消"])',
                'date': '@datetime'
            }]
        });
        res.json({
            code: 200,
            data
        });
    });
};
