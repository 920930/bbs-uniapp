<template>
	<view class="search" :style="{'padding-top': top + 'px'}">
		<view class="search-input" v-if="disabled" @click="urlTo">搜索</view>
		<template v-else>
			<input type="text" class="search-input" placeholder="搜索" />
		</template>
		<slot>
			<button class="search-button" size="mini">搜索</button>
		</slot>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
withDefaults(defineProps<{
	value?: string;
	disabled?: boolean
}>(), {
	value: '',
	disabled: false
})
const emits = defineEmits<{
	(e: 'update:value', str: string): void,
}>()
const top = ref(0)
const getInfo = () => {
	const data = uni.getSystemInfoSync();
	top.value = data.statusBarHeight
	top.value += data.osName === 'ios' ? 5 : 8;
}
getInfo()
const urlTo = () => {
	uni.navigateTo({
		url: '/pagea/search/search'
	})
}
</script>

<style lang="scss" scoped>
.search{
	width: 100%;
	height: 32px;
	display: flex;
	padding-left: 3%;
	&-input{
		/* #ifndef MP */
		width: 78%;
		/* #endif */
		/* #ifdef MP */
		width: 58%;
		@media (max-width: 375px) {
			width: 50%;
		}
		/* #endif */
		background-color: white;
		height: 100%;
		line-height: 32px;
		margin-right: 14rpx;
		padding-left: 34rpx;
		font-size: 30rpx;
		background-color: rgba(0, 0, 0, 0.05);
		border-radius: 40rpx;
		color: #999;
	}
	&-button{
		font-size: 30rpx;
	}
}
</style>