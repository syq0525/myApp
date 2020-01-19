/*
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2019-12-25 15:16:04
 * @LastEditors  : ShiYangquan
 * @LastEditTime : 2020-01-15 14:16:36
 */
const home = (resolve) => require([ './pages/home.vue' ], resolve);

export default [
  {
		path: '',
		redirect: '/home'
	},
	{
		path: '/home',
		meta: {
			title: '首页',
		},
		component: home
  }
  
]
