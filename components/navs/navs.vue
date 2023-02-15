<template>
	<scroll-view class="scroll-view" scroll-x :scroll-into-view="`tab-${activeId}`">
		<view
			class="item"
			:class="{'active': activeId === item.id}"
			v-for="item of datas"
			:id="`tab-${item.id}`"
			:key="`tab-${item.id}`"
			@tap="$emit('activeFn', item.id)"
		>
		{{ item.title }}
		</view>
	</scroll-view>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
	activeId: number;
	datas: any[]
}>(), {
	datas: () => [],
	activeId: 1
})

const emits = defineEmits<{
	(e: 'activeFn', id: number)
}>()

</script>

<style lang="scss" scoped>
scroll-view ::-webkit-scrollbar {  
	width: 0 !important;  
	height: 0 !important;  
	-webkit-appearance: none;  
}
.scroll-view{
	white-space: nowrap;
	width: 100%;
	padding: 20rpx 0;
	.item {
		display: inline-block;
		width: 20%;
		text-align: center;
		font-size: 36rpx;
	}
}
	.active{
		color: red;
	}
</style>
