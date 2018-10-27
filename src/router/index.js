import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/Index';
import Home from '@/views/Home';
import Page1 from '@/views/futures/Page1';
import Page2 from '@/views/futures/Page2';
import Coefficient from '@/views/futures/Coefficient';
import Test from '@/views/futures/Test';

// import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

// 一个空模板，方便子节点使用
const Root = Vue.component('root', {
    template: '<router-view></router-view>'
});

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
    // savedPosition is only available for popstate navigations.
        return savedPosition;
    } else {
        const position = {};
        // new navigation.
        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash;
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => !m.meta.scrollToTop)) {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0;
            position.y = 0;
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return position;
    }
};

export default new Router({
    scrollBehavior,
    routes: [
        {
            path: '',
            name: '首页',
            component: Index,
            icon: 'el-icon-setting',
            hidden: true
        },
        {
            path: '/x1',
            name: '研究支撑平台',
            component: Home,
            icon: 'el-icon-setting'
        },
        {
            path: '/x2',
            name: '数据分析工具',
            component: Home,
            icon: 'el-icon-setting',
            children: [
                {path: 'x21', name: '关联账户', icon: 'el-icon-tickets', component: Test},
                {path: 'x22', name: '相关系数', icon: 'el-icon-document', component: Root},
                {path: 'x27', name: '异常交易分析', icon: 'el-icon-document', component: Root},
                {path: 'x28', name: '组合分析', icon: 'el-icon-document', component: Root},
                {path: 'x29', name: '画像服务', icon: 'el-icon-document', component: Root},
                {path: 'x291', name: '账户画像', icon: 'el-icon-document', component: Root},
                {path: 'x292', name: '账户组画像', icon: 'el-icon-document', component: Root}
            ]
        },
        {
            path: '/x3',
            name: '配置管理',
            component: Home,
            icon: 'el-icon-setting',
            children: [
                {path: 'x31', name: '指标配置管理', icon: 'el-icon-tickets', component: Root},
                {path: 'x32', name: '模型配置管理', icon: 'el-icon-document', component: Root},
                {path: 'x23', name: '场景配置管理', icon: 'el-icon-document', component: Root},
                {path: 'x24', name: '结果集管理', icon: 'el-icon-document', component: Root}
            ]
        },
        {
            path: '/x4',
            name: '任务管理',
            component: Home,
            icon: 'el-icon-setting',
            children: [
                {path: 'x41', name: '关联账户稽查任务', icon: 'el-icon-tickets', component: Root}
            ]
        },
        {
            path: '/x5',
            name: '系统关联管理',
            component: Home,
            icon: 'el-icon-setting'
        }
        // {
        //     path: '/home',
        //     name: '系统',
        //     component: Home,
        //     icon: 'el-icon-setting',
        //     children: [
        //         {path: 'page1', name: '画像', icon: 'el-icon-tickets', component: Page1},
        //         {path: 'coefficient', name: '相关系数识别', icon: 'el-icon-document', component: Coefficient},
        //         {path: 'test', name: '测试', icon: 'el-icon-document', component: Test}
        //     ]
        // }
        // {
        //     path: '',
        //     name: 'Dreamersky',
        //     component: Home,
        //     icon: 'el-icon-mobile-phone',
        //     children: [
        //         {path: 'blog', name: '博客', icon: 'el-icon-tickets', component: Blog},
        //         {path: 'photo', name: '相册', icon: 'el-icon-picture', component: Database}
        //     ]
        // }
    ]
});
