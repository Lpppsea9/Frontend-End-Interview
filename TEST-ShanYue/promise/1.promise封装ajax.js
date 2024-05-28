// 实现原生ajax
const curUrl = "https://cnodejs.org/api/v1/topics";
const ajax = () => {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", curUrl);
	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4) {
			if (xhr.status >= 200 && xhr.status <= 200) {
				console.log(xhr.responseText);
			}
		}
	};
	xhr.send();
};

// promise封装ajax
const ajaxPromise = () => {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open("GET", curUrl);
		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4) {
				if (xhr.status >= 200 && xhr.status <= 200) {
					resolve(xhr.responseText);
				} else {
					reject("请求出错");
				}
			}
		};
		xhr.onerror = () => {
			reject("请求出错");
		};
		xhr.send();
	});
};

ajaxPromise()
	.then((res) => {
		// console.log("res", res);
	})
	.catch((err) => {});
