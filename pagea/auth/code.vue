<template>
	<view class="top">
		<image class="logo" src="../../static/c1.png" mode="aspectFill" />
		<text>请输入验证码</text>
		<text class="top-text">已发送至 +86{{phone}}</text>
	</view>
	<view>{{phone}}</view>
</template>

<script lang='ts' setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
const phone = ref('')
onLoad((res) => {
	phone.value = res.phone.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
})
</script>

<style lang="scss" scoped>
.top{
	display: flex;
	flex-direction: column;
	align-items: center;
	&-text{
		font-size: 26rpx;
		color: rgba(0, 0, 0, 0.8);
		margin: 10rpx 0;
	}
}
.logo{
	width: 100rpx;
	height: 100rpx;
}
</style>