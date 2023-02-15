const cate = [
		{title: '首页', url: '', id: 0, bgColor: 'red'},
		{title: '提问', url: '', id: 1, bgColor: 'green'},
		{title: '分享', url: '', id: 2, bgColor: 'darkorange'},
		{title: '讨论', url: '', id: 3, bgColor: 'bisque'},
		{title: '建议', url: '', id: 4, bgColor: 'coral'},
		{title: '公告', url: '', id: 5, bgColor: 'crimson'},
		{title: '动态', url: '', id: 6, bgColor: 'darkgoldenrod'},
	]

export const getCateData = () => {
	return cate
}

const str = '保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。'
export const desc = '本期课程将以线上线下双重结合的模式开展进行，报名成功的同学入学习群进行学习，教务组将针对课程录制学习视频，大家进行交流和学习，将课程内容录制成视频然后发至群里进行交流学习，然后一次大课完结以后会组织线下实操进行课程内容的实操演练和交流学习'
export const forFn = (str: string, len = str.length) => {
	let title = ''
	for(let i = 0; i < str.length; i++){
		title += str[Math.floor(Math.random() * len)]
	}
	return title
}
export const getIndexData = (id: number) => {
	const data = [];
	for(let i = 1; i < 120; i++){
		const ret = {
			id: i,
			title: forFn(str),
			img:  i % 4 !== 0 ? '/static/list/0.jpg' : '',
			cateId: Math.floor((Math.random() * 6 + 1)),
			desc: forFn(desc),
			createdAt: `2023-02-${i}`,
			user: {
				id: i,
				name: `用户${i}`,
				avatar: '/static/list/0.jpg'
			},
			cate:{
				id: Math.floor(Math.random() * 6) + 1,
				title: cate[Math.floor(Math.random() * 6) + 1].title,
				bgColor: cate[Math.floor(Math.random() * 6) + 1].bgColor,
			}
		}
		data.push(ret)
	}
	return id === 0 ? data : data.filter(item => item.cateId === id)
}