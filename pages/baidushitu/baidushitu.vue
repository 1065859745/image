<template>
	<view>
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: ''
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: res => {
					getApp().globalData.isPhone = res.windowHeight > res.windowWidth ? true : false
				}
			})
			this.url = getApp().globalData.isPhone? 'https://graph.baidu.com/view/home' :'https://graph.baidu.com/pcpage/index?tpl_from=pc'
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
