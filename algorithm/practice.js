//经典算法
//Q1:判断字符串是否是回文,回文:首尾都可以读通，如mamam redivider
function check(str) {
	return str == str.split('').reverse().join('');
}


//Q2:数组去重
function unique(arr) {
	let objhas = {};
	let data = [];
	for (let i = 0,l = arr.length; i < l; i++) {
		if(!objhas[arr[i]]){
			objhas[arr[i]] = true;
			data.push(arr[i]);
		}
	}
	return data;
}