<template>
	<view class="header">
		<search disabled>
			<i class="iconfont icon-maiqianzheng icon"></i>
		</search>
		<navs :datas='navDatas' :activeId='activeId' @activeFn='activeFn'></navs>
	</view>
	<view class="container">
		<template v-for="item in datas" :key="item.id">
			<item v-bind='item' />
		</template>
	</view>
	
	<view class="create">
		<navigator url='/pagea/auth/index'>
			<text class="iconfont icon-edit" style="font-size: 46rpx;"></text>
		</navigator>
	</view>
	<view class="line"></view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onReady } from '@dcloudio/uni-app'
import { getCateData, getIndexData } from '@/api/index'
const top = ref('')
const activeId = ref(0)
const navDatas = getCateData()
const datas = ref(getIndexData(activeId.value))

onReady(() => {
	const query = uni.createSelectorQuery()
	query.select('.header').boundingClientRect(ret => {
		top.value = ret['height'] + 'px';
	}).exec()
})

const activeFn = (id: number) => {
	activeId.value = id
	datas.value = getIndexData(id)
}

</script>

<style lang="scss" scoped>
.header{
	background-color: white;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 999;
}
.icon{
	display: flex;
	align-items: center;
	font-size: 50rpx;
	color: crimson;
}
.container{
	padding-top: v-bind(top);
	height: 200rpx;
	margin-top: 14rpx
}
.create{
	position: fixed;
	bottom: 8%;
	right: 8%;
	width: 100rpx;
	height: 100rpx;
	border-radius: 50%;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 0 8px 5px rgba(0, 0, 0, 0.1);
	z-index: 10;
}
</style>
