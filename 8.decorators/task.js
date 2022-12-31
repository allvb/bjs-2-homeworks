//Задача № 1
function cachingDecoratorNew(func) {
	let cache = [];
	return (...args) => {
		const hash = md5(args);
		let objectInCache = cache.find((item) => item.hash === hash);
		if (objectInCache) {
			console.log("Из кэша: " + objectInCache.value);
			return "Из кэша: " + objectInCache.value;
		}
		const value = func(...args);
		cache.push({hash, value});
		if (cache.length > 5) {
			cache.shift();
		}
		console.log("Вычисляем: " + value)
		return "Вычисляем: " + value;
	}
}


//Задача № 2
function debounceDecoratorNew(func, delay) {
	wrapper.count = 0;
	wrapper.allCount = 0;
	let timeoutId;
	function wrapper(...args) {
		if(wrapper.allCount === 0) {
			func(...args);
			wrapper.count += 1;
		}
		wrapper.allCount += 1;
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(() => {
			func(...args);
			wrapper.count += 1;
			timeoutId = null;
		}, delay);
	}
	return wrapper;
}