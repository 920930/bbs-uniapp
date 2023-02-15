const baseUrl = 'http://127.0.0.1:7001/api'
type TMethod = 'GET' | 'POST' | 'DELETE' | 'PUT'

const http = async (url: string, method: TMethod = 'GET', data?: any) => {
	return new Promise((resolve, reject) => {
		uni.request({
			method,
			url: `${baseUrl}/${url}`,
			data,
			success(e) {
				e.statusCode >= 200 && e.statusCode < 300 ? resolve(e.data) : reject(e)
			},
			fail(err) {
				reject(err)
			}
		})
	})
	
}

http.get = (url: string) =>  http(url, 'GET')
http.post = (url: string, data: any) => http(url, "POST", data)
http.put = (url: string) => http(url, "PUT")
http.delete = (url: string) => http(url, "DELETE")

export default http