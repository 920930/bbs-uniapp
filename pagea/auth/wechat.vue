<template>
	<form @submit="formSubmit" @reset="formReset">
		<view class="uni-form-item uni-column">
			<view class="title">input</view>
			<input class="uni-input" name="input" placeholder="这是一个输入框" />
			<button open-type="getUserInfo" @getuserinfo="userBtn">获取用户信息</button>
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">手机号</view>
			<input class="uni-input" name="input" placeholder="这是一个输入框" />
			<button open-type="getPhoneNumber" @getphonenumber="phoneBtn">获取手机号</button>
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">头像</view>
			<input class="uni-input" name="input" placeholder="获取微信头像" />
			<button open-type="chooseAvatar" @chooseavatar="avatarBtn">获取微信头像</button>
		</view>
		<view class="uni-btn-v">
			<button form-type="submit">Submit</button>
			<button type="default" form-type="reset">Reset</button>
		</view>
	</form>
</template>

<script setup lang="ts">
import { inject } from 'vue';

const http: any = inject('http')

const formSubmit = (e) => {
	console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
	var formdata = e.detail.value
	uni.showModal({
		content: '表单数据内容：' + JSON.stringify(formdata),
		showCancel: false
	});
}
const formReset = (e) => {
	console.log('清空数据')
}

const userBtn = (e) => {
	console.log(e)
}
const phoneBtn = (e) => {
	console.log(e)
}
const avatarBtn = (e) => {
	console.log(e)
}
</script>

<style scoped>
.uni-form-item .title {
	padding: 20rpx 0;
}
</style>