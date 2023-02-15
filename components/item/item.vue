<template>
	<view class="item">
		<view class="item-top">
			<view class="item-top-cate" :style="`background-color: ${cate.bgColor}`">{{cate.title}}</view>
			<text class="item-top-title">{{title}}</text>
		</view>
		<view class="item-center">
			<view class="item-center-left">
				<view class="item-center-left-user">
					<image :src="user.avatar" mode="aspectFill" class="item-center-left-user-img"></image>
					<text class="item-center-left-name">{{user.name}}</text>
				</view>
				<text class="item-center-left-desc">{{desc}}</text>
			</view>
			<image v-if=img :src="img" mode="aspectFill" class="item-center-img" />
		</view>
		<view class="item-down">
			<text style="margin-right: 20rpx;">12回复</text>
			<text>{{createdAt}}</text>
		</view>
	</view>
</template>

<script setup lang="ts">
defineProps<{
	id: number;
	title: string;
	cateId: number;
	img: string;
	desc: string;
	createdAt: string;
	user: {
		id: number;
		name: string;
		avatar: string;
	},
	cate: {
		id: number;
		title: string;
		bgColor: string
	}
}>()
</script>

<style lang="scss" scoped>
.item{
	padding: 16rpx 3%;
	margin-bottom: 14rpx;
	background-color: white;
	&-top{
		font-size: 34rpx;
		position: relative;
		&-cate{
			display: inline-flex;
			background-color: red;
			color: white;
			border-radius: 30rpx;
			border-bottom-left-radius: 0;
			padding: 0 16rpx;
			font-size: 30rpx;
			position: absolute;
			left: 0;
			top: 4rpx;
		}
		&-title{
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden;
			text-indent: 100rpx;
		}
	}
	&-center{
		display: flex;
		margin-top: 20rpx;
		margin-bottom: 16rpx;
		&-img{
			width: 160rpx;
			height: 160rpx;
			margin-left: 16rpx;
		}
		&-left{
			font-size: 32rpx;
			color: #666;
			flex: 1;
			&-user{
				display: flex;
				align-items: center;
				margin-bottom: 10rpx;
				&-img{
					width: 48rpx;
					height: 48rpx;
					margin-right: 20rpx;
					border-radius: 50%;
				}
			}
			&-desc{
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 3;
				overflow: hidden;
				font-size: 30rpx;
			}
		}
	}
	&-down{
		font-size: 30rpx;
		color: #999;
	}
}
</style>
