<script>
	export default {
		globalData: {
			access_token: '',
			proxy_server: '',
		},
		onLaunch: function() {
			// 添加百度SK、AK
			const SecretKey = ''
			const APIKey = ''
			// 获取access_token
			// 安卓可以直接发起请求获取， h5平台需要另起一个反向代理服务解决跨域问题
			let address = typeof plus === 'object' ? 'https://aip.baidubce.com' : getApp().globalData.proxy_server
			let url = address + '/oauth/2.0/token?grant_type=client_credentials&client_id=' + APIKey + '&client_secret=' +
				SecretKey
			uni.request({
				url: url,
				success: res => {
					getApp().globalData.access_token = res.data.access_token
				}
			})
		},
		onShow: function() {},
		onHide: function() {}
	};
</script>

<style>
	@import '@/static/iconfont/iconfont.css';

	/* 解决头条小程序组件内引入字体不生效的问题 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		src: url('/static/uni.ttf');
	}

	/* #endif */

	.image {
		flex: 2;
		margin-top: 10px;
		min-width: 38vh;
	}

	.container {
		display: flex;
		flex-wrap: wrap;
	}

	.resultList {
		min-width: 45vh;
		flex: 3;
	}

	.list-footer {
		display: flex;
		align-items: center;
	}

	.icon-loading {
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		100% {
			transform: rotate(360deg)
		}
	}
</style>
