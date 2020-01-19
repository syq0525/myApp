/*
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2020-01-16 16:33:14
 * @LastEditors  : ShiYangquan
 * @LastEditTime : 2020-01-16 16:57:28
 */
import axios from 'axios';

const install = function (Vue) {
  axios.interceptors.request.use(
		(config) => {
			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);

	axios.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
			return Promise.resolve(error.response);
		}
  );
  
  function checkStatus(response) {
    // 如果http状态码正常，则直接返回数据
    
		if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
      let resData = response.data;
			return resData;
		}
		// 异常状态下，把错误信息返回去
		return {
			status: -404,
			msg: '网络异常'
		};
	}

	Vue.$post = Vue.prototype.$post = function (url, data) {
		return axios({
				method: 'post',
				url,
				data,
				timeout: 10000,
				headers: {
					'X-Requested-With': 'XMLHttpRequest',
					'Content-Type': 'application/json;charset=UTF-8',
				}
			})
			.then((response) => {
				return checkStatus(response);
			})
			
	};
}


export default install;