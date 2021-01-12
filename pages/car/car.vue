<template>
	<view class="container">
		<view class="resultList" style="min-width: 350px;">
			<uni-section title="识别结果" type="line"></uni-section>
			<uni-list>
				<uni-list-item clickable :to="getDetailUrl(item.name,series_id[index])" showArrow :id="index" :title="item.name+item.year"
				 :note="'相似度: '+item.score.toFixed(5)" v-for="(item, index) in result" :key="index">
					<view class="list-footer" slot='footer'>
						<view v-show="!price[index]" class="iconfont icon-loading"></view>
						<uni-tag circle :text="price[index]"></uni-tag>
					</view>
				</uni-list-item>
			</uni-list>
		</view>
		<image class="image" @click="chooseImage" :src="tempFilePath" mode="widthFix"></image>
	</view>
</template>

<script>
	import {
		pathToBase64
	} from '../../static/js/image-tool.js'
	import {
		base64Compress
	} from '../../static/js/base64-compress.js'
	export default {
		data() {
			return {
				price: [],
				series_id: [],
				tempFilePath: '',
				result: [],
				isPhone: false,
			}
		},

		onLoad(option) {
			uni.setNavigationBarTitle({
				title: option.title
			})
			this.tempFilePath = option.tempFilePath
			this.request()
			uni.getSystemInfo({
				success: (res) => {
					this.isPhone = res.windowHeight > res.windowWidth
				}
			})
		},
		methods: {
			getDetailUrl(name, series_id) {
				let url = 'https://youjia.baidu.com'
				url += (this.isPhone && series_id) ? ('/pages/view/index?name=' + name + '&serid=' + series_id) : (
					'/view/search?query=' + name)
				return '../detail/detail?url=' + encodeURIComponent(url) + '&title=有驾'
			},
			chooseImage() {
				uni.chooseImage({
					count: 1,
					success: res => {
						this.tempFilePath = res.tempFilePaths[0]
						this.request()
					}
				})
			},
			request() {
				this.result = []
				this.price = []
				let url = typeof plus === 'object' ? 'https://aip.baidubce.com' : getApp().globalData.proxy_server
				uni.showLoading({
					title: '识别中',
					mask: true,
					success: () => {
						pathToBase64(this.tempFilePath).then(base64 => {
							base64Compress(base64, newBase64 => {
								uni.request({
									url: url + '/rest/2.0/image-classify/v1/car?access_token=' + getApp().globalData.access_token,
									data: {
										image: encodeURI(newBase64.slice(newBase64.indexOf(',') + 1))
									},
									method: "POST",
									header: {
										'Content-Type': 'application/x-www-form-urlencoded'
									},
									success: res => {
										if (res.data.error_msg) {
											uni.showToast({
												title: res.data.error_msg,
												icon: 'none'
											})
											return
										}
										if (res.data.result[0].name == '非车类') {
											uni.showToast({
												title: '非车类',
												icon: 'none'
											})
											return
										}
										this.result = res.data.result.sort((a, b) => (b.score - a.score))
										// 获取识别结果车辆价格信息
										// 安卓可直接获取,h5需要另起一个反向代理服务
										let urlOfPrice = typeof plus === 'object' ? 'https://youjia.baidu.com' : getApp().globalData.proxy_server
										this.series_id = this.price = this.result.map((v, i) => {
											uni.request({
												url: urlOfPrice + '/search/search?token=1_526c1239fc0b0512a2bd13ac6b962f5f&query=' + v.name,
												success: res => {
													let data = res.data.Result.data[0]
													this.price = this.price.map((val, index) => (index == i ? data.price : val))
													this.series_id = this.series_id.map((val, index) => (index == i ? data.series_id : val))
												},
												fail: () => {
													this.price = this.price.map((val, index) => (index == i ? '暂无报价' : val))
													this.series_id = this.series_id.map((val, index) => (index == i ? '' : val))
												},
											})
										})
									},
									fail: () => {
										uni.showToast({
											icon: 'none',
											title: '网络连接失败'
										})
									},
									complete: () => {
										uni.hideLoading()
									}
								})
							})
						}).catch(error => {
							uni.redirectTo({
								url: "../index/index"
							})
						})
					}
				});
			}
		}
	}
</script>

<style>

</style>
