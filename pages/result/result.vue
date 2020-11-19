<template>
	<view class="container">
		<view class="image">
			<image @click="chooseImage" :src="tempFilePath" mode="aspectFit"></image>
		</view>
		<uni-section title="识别结果" type="line"></uni-section>
		<uni-list>
			<uni-list-item showArrow clickable :to="'../detail/detail?url=' + encodeURIComponent('https://baike.baidu.com/item/' +(item.keyword||item.name))"
			 :note="'相似度: '+(item.score||item.probability)" :title="item.keyword||item.name" v-for="(item, index) in result"
			 :key="index">
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
				tempFilePath: "",
				apiUrl: '',
				result: []
			}
		},

		onLoad(option) {
			uni.setNavigationBarTitle({
				title: option.title
			});
			this.tempFilePath = option.tempFilePath
			this.apiUrl = option.apiUrl
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
				this.result = []
				let url = typeof plus === 'object' ? 'https://aip.baidubce.com' : getApp().globalData.proxy_server
				uni.showLoading({
					title: '识别中',
					mask: true,
					success: () => {
						pathToBase64(this.tempFilePath).then(base64 => {
							base64Compress(base64, newBase64=>{
								uni.request({
									url: url + '/rest/2.0' + this.apiUrl + "?access_token=" + getApp().globalData.access_token,
									data: {
										image: encodeURI(newBase64.slice(newBase64.indexOf(',') + 1))
									},
									method: "POST",
									header: {
										'Content-Type': 'application/x-www-form-urlencoded'
									},
									success: res => {
										res.data.error_msg || /非/.test(res.data.result[0].name) ? uni.showToast({
											title: res.data.error_msg || res.data.result[0].name,
											icon: 'none'
										}) : this.result = res.data.result.sort((a, b) => (a.score ? (b.score - a.score) : (b.probability - a
											.probability)))
									},
									fail: () => {
										uni.showToast({
											title: '网络连接失败',
											icon: 'none'
										})
									},
									complete: () => {
										uni.hideLoading()
									}
								})
							})
						}).catch(error => {
							uni.redirectTo({
								url:"../index/index"
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
