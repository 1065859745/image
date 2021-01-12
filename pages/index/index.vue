<template>
	<view style="display: flex;flex-direction: column;height: 100vh;">
		<view class="status-bar"></view>
		<view class="footer">
			<view class="content" v-for="(item,index) in list" @click="chooseImage(item.name,item.goPage,item.apiUrl)" :key="index">
				<view class="iconfont" :class="item.font" :style="{fontSize: '72px'}"></view>
				{{item.name}}
			</view>
			<view class="content" @click="navigateTo">
				<image src="../../static/image/baidushitu.png" style="height: 72px;" mode="heightFix"></image>
				百度识图
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			const list = [{
				font: "icon-image",
				name: '图像识别',
				goPage: 'result',
				apiUrl: '/image-classify/v2/advanced_general'
			}, {
				font: 'icon-animal',
				name: '动物识别',
				goPage: 'result',
				apiUrl: '/image-classify/v1/animal'
			}, {
				font: 'icon-plant',
				name: '植物识别',
				goPage: 'result',
				apiUrl: '/image-classify/v1/plant'
			}, {
				font: 'icon-cheliang',
				name: '车辆识别',
				goPage: 'car',
			}, {
				font: 'icon-huobi',
				name: '货币识别',
				goPage: 'currency'
			}, {
				font: 'icon-dish',
				name: '菜品识别',
				goPage: 'dish',
			}]
			return {
				list: list,
			}
		},
		methods: {
			chooseImage(title, goPage, apiUrl) {
				uni.chooseImage({
					count: 1,
					success: (res) => {
						uni.navigateTo({
							url: '/pages/' + goPage + '/' + goPage + '?tempFilePath=' + res.tempFilePaths[0] + "&title=" + title +
								"&apiUrl=" + apiUrl
						})
					},
				})
			},
			navigateTo() {
				uni.navigateTo({
					url:'../baidushitu/baidushitu'
				})
			}
		}
	}
</script>

<style>
	.status-bar {
		background-color: #2f94ff;
		height: var(--status-bar-height);
	}

	.footer {
		display: flex;
		flex-wrap: wrap;
		flex: 1;
	}

	.content {
		min-width: 96px;
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 10px 16px;
	}
</style>
