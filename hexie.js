const _dict = ['富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善'];

const encode = (src, dict = _dict) => {
	dict = [...new Set(Array.isArray(dict) ? dict : [...dict])];
	const decimal = dict.length - 1;
	const codes = src.toString().split('').map(e => {
		const code = e.charCodeAt(0);
		const digits = [code % decimal];
		let remainder = code;
		while ((remainder /= decimal) >= 1) {
			digits.unshift(remainder % decimal ^ 0);
		}
		return digits;
	});

	const result = [...codes].map((c, i) => c.map(d => dict[d]).join('') + (i < codes.length - 1 ? dict[dict.length - 1] : '')).join('');
	return result;
}

const decode = (src, dict = _dict) => {
	dict = [...new Set(Array.isArray(dict) ? dict : [...dict])];
	const raw = dict.reduce((acc, key, index) =>
		acc.replace(new RegExp(key, 'gm'), index === dict.length - 1 ? ',' : `{${index}}`), src);

	const result = raw.split(',')
		.map(e => /{(.+?)}/g[Symbol.match](e)
			.map(e => +e.replace(/[\{\}]/g, ''))
			.reduce((acc, cur, i, arr) => acc + cur * ((dict.length - 1) ** (arr.length - i - 1)), 0)
		).map(e => String.fromCharCode(e)).join('');

	return result
}

if (typeof module !== 'undefined') {
	module.exports = {
		encode,
		decode
	};
}