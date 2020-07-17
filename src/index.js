export default class SuperMap {
	#keys = [];
	#values = [];
	#entries = [];

	constructor(iterable = []) {
		for (const key in iterable) {
			if (!iterable.hasOwnProperty(key)) { continue; }

			const value = iterable[key];

			this.#keys.push(key);
			this.#values.push(value);
			this.#entries.push([key, value]);
		}
	}

	#runCallback = (callback) => ([key, value]) => callback(value, key, this)
	#arrayIterable = function(array) {
		return (function* iterable() {
			for (const value of array) {
				yield value;
			}
		})();
	}

	has(key) {
		return this.#keys.includes(key);
	}
	get(key) {
		const index = this.#keys.indexOf(key);

		return this.#values[index];
	}
	set(key, value) {
		if (this.has(key)) {
			const index = this.#keys.indexOf(key);

			this.#values[index] = this.#entries[index][1] = value;
		} else {
			this.#keys.push(key);
			this.#values.push(value);
			this.#entries.push([key, value]);
		}

		return this;
	}
	delete(key) {
		if (!this.has(key)) {
			return false;
		}

		const index = this.#keys.indexOf(key);

		this.#keys.splice(index, 1);
		this.#values.splice(index, 1);
		this.#entries.splice(index, 1);

		return true;
	}
	clear() {
		this.#keys.length = 0;
		this.#values.length = 0;
		this.#entries.length = 0;
	}

	keys() {
		return this.#arrayIterable(this.#keys);
	}
	values() {
		return this.#arrayIterable(this.#values);
	}
	entries() {
		return this.#arrayIterable(this.#entries);
	}
	[Symbol.iterator]() {
		return this.entries();
	}
	forEach(callback) {
		return this.#entries.forEach(this.#runCallback(callback));
	}

	find(callback) {
		return this.#entries.find(this.#runCallback(callback));
	}
	map(callback) {
		return this.#entries.map(this.#runCallback(callback));
	}
	reduce(callback, initialValue) {
		return this.#entries.reduce((accum, [key, value]) => callback(accum, value, key, this), initialValue);
	}
	filter(callback) {
		const filtered = new SuperMap();

		this.#entries.forEach(([key, value]) => {
			if (callback(key, value, this)) {
				filtered.set(key, value);
			}
		});

		return filtered;
	}

	get size() {
		return this.#keys.length;
	}
	get length() {
		return this.#keys.length;
	}
}
