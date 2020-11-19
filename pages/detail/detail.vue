<template>
	<view>
		<web-view :src="src"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: ''
			}
		},
		onLoad(option) {
			this.src = option.url? decodeURIComponent(option.url) : (getApp().globalData.isPhone? 'https://graph.baidu.com/view/home' : 'https://graph.baidu.com/pcpage/index?tpl_from=pc')
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
