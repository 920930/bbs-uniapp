<template>
	<uni-search-bar
		:focus='focus'
		bgColor='rgba(0,0,0,0.04)'
		@clear="clear"
		@confirm='confirm'
		cancelButton="none"
		v-model="searchValue"
	>
	</uni-search-bar>
	
	<template v-if='searchList.length'>
		<view class="list" v-for="item of searchList" :key="item.id">
			<text class="list-title">{{item.title}}</text>
			<text class="iconfont icon-home"></text>
		</view>
	</template>
	
	<template v-else>
		<view class="pd title">
			<text>搜索历史</text>
			<text class="iconfont icon-delete title-icon" @tap="resetStorage"></text>
		</view>
		<view class="pd search">
			<text class="search-item" v-for="(item, i) of mySearch" :key="i" @tap="searchFn(item)">{{item}}</text>
		</view>
		<text class="pd title">热门推荐</text>
		<view class="pd search">
			<text class="search-item" v-for="(item, i) of hotSearch" :key="i" @tap="searchFn(item.title)">{{item.title}}</text>
		</view>
	</template>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getHotSearch, getSearchList } from '@/api/search'
import { onLoad } from '@dcloudio/uni-app'
const searchValue = ref('')
const mySearch = ref([])
const hotSearch = ref([])
const focus = ref(true)
const searchList = ref([])

const confirm = () => {
	revorFn(searchValue.value)
	searchFn(searchValue.value)
}
const clear = () => {
	searchValue.value = ''
	searchList.value = [];
};
const searchFn = async (val: string) => {
	searchValue.value = val
	revorFn(val)
	searchList.value = await getSearchList(val)
}
const revorFn = (val: string) => {
	const index = mySearch.value.findIndex(item => item === val)
	index != -1 && mySearch.value.splice(index, 1)
	mySearch.value.unshift(val)
	uni.setStorage({
		data: mySearch.value,
		key: 'search'
	})
}
const resetStorage = () => {
	mySearch.value = [];
	uni.removeStorage({
		key: 'search'
	})
}
// 异步请求，不用放在生命周期中
uni.getStorage({
	key: 'search',
	success(res) {
		mySearch.value = res.data
	}
})

onLoad(async () => {
	hotSearch.value = await getHotSearch()
})
</script>

<style lang="scss" scoped>
.pd{
	padding: 0 3%;
}
.title{
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 38rpx;
	font-weight: bold;
	&-icon{
		font-weight: 200;
	}
}
.search{
	display: flex;
	flex-wrap: wrap;
	margin: 18rpx 0 0;
	position: relative;
	left: -20rpx;
	&-item{
		margin-left: 20rpx;
		background-color: rgba(0, 0, 0, 0.06);
		padding: 4rpx 20rpx;
		margin-bottom: 26rpx;
		font-size: 30rpx;
	}
}

.list{
	display: flex;
	padding: 0 3%;
	justify-content: space-between;
	align-items: center;
	margin: 22rpx 0 26rpx;
	padding-bottom: 26rpx;
	border-bottom: 1px solid rgba(0, 0, 0, 0.06);
	&-title{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
		flex: 1;
		font-size: 30rpx;
	}
}
</style>
