/*
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2019-06-26 09:41:02
 * @LastEditors  : ShiYangquan
 * @LastEditTime : 2020-01-15 14:24:09
 */
const path = require('path');
const webpack = require('webpack')
module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/webapps/' : '/',
	assetsDir: 'static',
	lintOnSave: false,
	productionSourceMap: false,
	chainWebpack: (config) => {
		config.plugins.delete('prefetch');

		config.module
			.rule('images')
			.use('url-loader')
			.loader('url-loader')
			.tap((options) => Object.assign(options, { limit: 10240 }));
	},
	configureWebpack: {
		plugins: [
			new webpack.ProvidePlugin({
				$:"jquery",
				jQuery:"jquery",
				"windows.jQuery":"jquery",
				Popper: ['popper.js', 'default']
			})
		]
	},
	devServer: {
		open: true, // 启动服务后是否打开浏览器
		host: 'localhost',
		port: 8082, // 服务端口
		https: false,
		hotOnly: true,
		proxy: {
			'/syq': {
				target: 'http://192.168.21.158:3000',
				changeOrigin: true
			},
			
		}
	}
};
