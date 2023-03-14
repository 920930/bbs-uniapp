<template>
	<view class="logo">
		<image class="logo-img" src="../../static/c1.png" mode="aspectFill" />
		<text>bbs技术社区</text>
	</view>
	<view class="center">
		<input type="number" v-model="phone" maxlength="11" class="center-input" placeholder="请输入手机号" />
		<!-- <input type="safe-password" class="center-input" placeholder="" /> -->
		<p class="center-text">
			<checkbox :checked="isArgee" @tap="isArgee = !isArgee" class="center-text-input" />
			<span>未注册的手机号验证后将自动创建京东账号，登录即代表您已同意《BBS隐私政策》</span>
		</p>
		<button class="center-btn" size="mini" :disabled="isDisabled" @tap="argeeFn">获取验证码</button>
		<p>
			<span>新用户注册</span>
			<span>账号密码登录</span>
		</p>
	</view>
	<view class="bottom">
		<view class="bottom-item">
			<text class="iconfont icon-QQ bottom-item-icon"></text>
			<text>微信登录</text>
		</view>
		<!-- #ifdef  APP-PLUS -->
		<view class="bottom-item" @tap="preLogin">
			<text class="iconfont icon-weibo1 bottom-item-icon"></text>
			<text>手机登录</text>
		</view>
		<!-- #endif -->
		<view class="bottom-item">
			<text class="iconfont icon-alipay1 bottom-item-icon"></text>
			<text>QQ登录</text>
		</view>
	</view>
</template>

<script setup lang="ts">
// import { onLoad } from '@dcloudio/uni-app'
import { ref, computed } from 'vue'
const isArgee = ref(true)
const phone = ref('')
const isDisabled = computed(() => {
	return isArgee.value ? (phone.value.length > 0 ? false : true) : true;
})
const argeeFn = () => {
	if(/^1[3-9]\d{9}$/.test(phone.value.trim())) {
		uni.navigateTo({
			url: '/pagea/auth/code?phone='+phone.value,
		})
	}else{
		uni.showToast({
			title: '请填写正确的手机号',
			icon: 'none',
			duration: 2000
		});
	}
}

// #ifdef APP-PLUS
const preLogin = () => {
	uni.login({
		provider: 'univerify',
		univerifyStyle: { 
	    fullScreen: true
	  },
		success(res) {
			console.log(res)
		}
	})
}
// 预登录
// uni.preLogin({
// 	provider: 'univerify',
// 	success() {
// 		preLogin()
// 	},
// })
// #endif
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
	height: 25vh;
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
		background-color: red;
		color: white;
		outline: none;
		background-color: red;
	}
	&-input{
		background-color: rgba(0, 0, 0, 0.05);
		height: 80rpx;
		margin-bottom: 30rpx;
		padding: 0 20rpx;
		border-radius: 20rpx;
	}
	&-text{
		display: flex;
		margin-bottom: 16rpx;
		color: rgba(0, 0, 0, 0.6);
		font-size: 26rpx;
		&-input{
			margin-right: 10rpx;
			transform: scale(0.7);
			color: red;
		}
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

// :deep(checkbox .wx-checkbox-input){
//   border-radius: 50% !important;
//   color: #ffffff !important;
// }

// :deep(checkbox .wx-checkbox-input.wx-checkbox-input-checked) {
//   color: #fff;
//   background: red;
// }

// :deep(.wx-checkbox-input.wx-checkbox-input-checked) {
//   border: none !important;
// }
</style>
