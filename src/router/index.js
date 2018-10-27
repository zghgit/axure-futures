import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import PortraitCharts from '@/views/futures/portraitCharts';
import Page2 from '@/views/futures/Page2';


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
            name: '系统',
            component: Home,
            icon: 'el-icon-setting',
            children: [
                {path: 'page1', name: '画像', icon: 'el-icon-tickets', component: PortraitCharts},
                {path: 'page2', name: '相关系数识别', icon: 'el-icon-document', component: Page2}
            ]
        }
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
