<template>
	<view class="logo">
		<image class="logo-img" src="../../static/c1.png" mode="aspectFill" />
		<text>bbs技术社区</text>
	</view>
	<view class="center">
		<button class="center-btn" size="mini" type="primary" @tap="wechatBtn">微信登录</button>
		<button class="center-btn" size="mini" open-type="getPhoneNumber">手机号登录</button>
	</view>
	<view class="bottom">
		<view class="bottom-item">
			<text class="iconfont icon-QQ bottom-item-icon"></text>
			<text>QQ登录</text>
		</view>
		<view class="bottom-item">
			<text class="iconfont icon-weibo1 bottom-item-icon"></text>
			<text>微博登录</text>
		</view>
		<view class="bottom-item">
			<text class="iconfont icon-alipay1 bottom-item-icon"></text>
			<text>支付宝登录</text>
		</view>
	</view>
</template>

<script setup lang="ts">
// import { onLoad } from '@dcloudio/uni-app'
const wechatBtn = async () => {
	uni.navigateTo({
		url: '/pagea/auth/wechat'
	})
}

const getLogin = () => (uni.login())
const getUser = async () => (uni.getUserProfile({desc: '登录'}))
</script>

<style lang="scss" scoped>
.logo{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 40vh;
	font-size: 30rpx;
	color: #666;
	&-img{
		width: 100rpx;
		height: 100rpx;
	}
}
.center{
	padding: 0 3%;
	display: flex;
	flex-direction: column;
	&-btn{
		width: 100%;
		margin-bottom: 24rpx;
		padding: 6rpx 0;
	}
}

.bottom{
	position: absolute;
	bottom: 6%;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	&-item{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 24rpx;
		margin-right: 60rpx;
		color: #666;
		&-icon{
			font-size: 60rpx;
			margin-bottom: 16rpx;
		}
		&:last-of-type{
			margin-right: 0;
		}
	}
}
</style>
