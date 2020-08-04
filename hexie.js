const _dict = ['富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善'];

const encode = (src, dict = _dict) => {
	dict = [...new Set(Array.isArray(dict) ? dict : [...dict])];
	const codes = [...src].map(e => e.charCodeAt(0).toString(dict.length - 1)).join(',');
	const map = Object.fromEntries([
		...dict.map((e, i, arr) => [i.toString(arr.length - 1), e]).slice(0, dict.length - 1),
		[',', dict[dict.length - 1]]
	]);
	const result = [...codes].map(c => map[c]).join('');
	return result;
}

const decode = (src, dict = _dict) => {
	dict = [...new Set(Array.isArray(dict) ? dict : [...dict])];
	const raw = dict.reduce((acc, key, index) =>
		acc.replace(new RegExp(key, 'gm'), index === dict.length - 1 ? ',' : `{{${index.toString(dict.length - 1)}}}`), src);
	return raw.split(',').map(e => String.fromCharCode(parseInt(e.replace(/{{(.)}}/g, (_, i) => i), dict.length - 1))).join('');
}

if (typeof module !== 'undefined') {
	module.exports = {
		encode,
		decode
	};
}