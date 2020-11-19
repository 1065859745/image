<template>
	<view class="container">
		<view class="image">
			<image @click="chooseImage" :src="tempFilePath" mode="aspectFit"></image>
		</view>
		<uni-section title="识别结果" type='line'></uni-section>
		<uni-list>
			<uni-list-item v-show="result.currencyName" :to="'../detail/detail?url=' + encodeURIComponent('https://baike.baidu.com/item/' +result.currencyName)"
			 :title="result.currencyName" :note="result.year">
				<view class="list-footer" slot='footer'>
					<uni-tag circle :text="result.currencyDenomination?result.currencyDenomination:''"></uni-tag>
				</view>
			</uni-list-item>
		</uni-list>
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
				tempFilePath: '',
				result: {}
			}
		},
		onLoad(option) {
			this.tempFilePath = option.tempFilePath
			this.request()
		},
		methods: {
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
				this.result = {}
				let url = typeof plus === 'object' ? 'https://aip.baidubce.com' : getApp().globalData.proxy_server
				uni.showLoading({
					title: '识别中',
					mask: true,
					success: () => {
						pathToBase64(this.tempFilePath).then(base64 => {
							base64Compress(base64, newBase64 => {
								uni.request({
									url: url + '/rest/2.0/image-classify/v1/currency?access_token=' + getApp().globalData.access_token,
									data: {
										image: encodeURI(newBase64.slice(newBase64.indexOf(',') + 1))
									},
									method: "POST",
									header: {
										'Content-Type': 'application/x-www-form-urlencoded'
									},
									success: res => {
										res.data.result.currencyName == '' ? uni.showToast({
											icon: 'none',
											title: '识别失败'
										}) : this.result = res.data.result
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
				})
			}
		}
	}
</script>

<style>

</style>
