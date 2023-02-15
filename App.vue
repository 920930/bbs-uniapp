<script>
	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	@import url('static/fonts/iconfont.css');
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
	.line{
		position: fixed;
		bottom: -5px;
		left: 0;
		width: 100%;
		height: 3px;
		z-index: 999;
		box-shadow: 0 -3px 3px rgba(0, 0, 0, 0.05);
	}
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
</style>
