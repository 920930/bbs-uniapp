import { forFn, desc } from './index';

export const getHotSearch = async () => {
	return [
		{id: 1, title: 'react'},
		{id: 2, title: 'vue'},
		{id: 3, title: 'three'},
		{id: 4, title: 'typescript'},
		{id: 5, title: 'js'},
		{id: 6, title: 'uniapp'},
		{id: 7, title: 'taro'},
		{id: 8, title: 'tauri'},
		{id: 9, title: 'laravel'},
		{id: 10, title: 'midway'},
	]
}

export const getSearchList = async (val: string) => {
	let arr = [];
	for (let i = 0; i < 30; i++) {
		const ret = {id: i, title: forFn(desc)}
		arr.push(ret)
	}
	return arr
}

