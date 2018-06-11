// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/** 
 * 【全部引入方式，不推荐】
 * 推荐：babel-plugin-import
 */
// 引入 vant UI库
// import Vant from 'vant'
// import 'vant/lib/vant-css/index.css'
// Vue.use(Vant)


// babel-plugin-import 引入形式，胚子文件 .babelrc 【按需加载】
import {
	Button,
	Row,
	Col,
	Swipe,
	SwipeItem,
	Lazyload,
	List
} from 'vant'
Vue.use(Button)
.use(Row)
.use(Col)
.use(Swipe)
.use(SwipeItem)
.use(Lazyload)
.use(List)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
