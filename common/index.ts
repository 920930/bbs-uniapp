export const getDomInfo = (id: string, info: any, fn: (data: any) => void, comThis: any = null) => {
	const query = uni.createSelectorQuery();
	comThis && query.in(comThis)
		query.select(id)
		.fields(info, fn)
		.exec()
}