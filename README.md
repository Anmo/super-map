# super-map
An Extended Map (with some array methods)

## Install

As normal, you can use npm
```
npm i super-map
```
or yarn
```
yarn super-map
```

Don't forget to use `--save`/`add` do add the dependency to your project.

## Usage

You can use `SuperMap` as a normal `Map`, but import it first ;)

```javascript
import SuperMap from 'super-map';
```

_NOTE:_ If you like, you can just import as Map, and use it where you were already using the native `Map` (`import Map from 'super-map';`)

After this, just use as you would use the native `Map`:

```javascript
const superMap = new SuperMap();
const array = [1, 2, 3];
const object = { asd: 123, qwe: 456 };

superMap.set(array, object);
console.log(superMap.size); // 1
console.log(superMap.has(array)); // true
const value = superMap.get(array);
console.log(value === object); // true
console.log(superMap.delete('potatoes')); // false
superMap.forEach(console.log);
// { asd: 123, qwe: 456 }, [1, 2, 3], SuperMap
for (const entry of superMap.entries()) {
	console.log(entry); // [[1, 2, 3], { asd: 123, qwe: 456 }]
}
superMap.clear();
console.log(superMap.size); // 0
```

### Array like

But, with `SuperMap` you can use some `Array` methods.

```javascript
superMap.find((value, key, self) => key === array);
// [[1, 2, 3], { asd: 123, qwe: 456 }]
superMap.filter((value, key, self) => key === array);
// SuperMap instance with the filtered entries
superMap.reduce(
	(acc, value, key, self) => acc + value.asd + value.qwe,
	0
);
// 579
superMap.map((value, key, self) => value);
// [{ asd: 123, qwe: 456 }]
```

_HINT:_ The map method works well with frameworks like `reactjs` ;)

## Properties & Methods

| Properties | Description                                                                                                                     |
|------------|---------------------------------------------------------------------------------------------------------------------------------|
| `size`     | similar [Map.prototype.size](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size)         |
| `length`   | similar [Array.prototype.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length) |

| Methods      | Description                                                                                                                          |
|--------------|--------------------------------------------------------------------------------------------------------------------------------------|
| `clear`      | similar [Map.prototype.clear](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear)            |
| `delete`     | similar [Map.prototype.delete](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete)          |
| `entries`    | similar [Map.prototype.entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries)        |
| `forEach`    | similar [Map.prototype.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach)        |
| `get`        | similar [Map.prototype.get](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get)                |
| `has`        | similar [Map.prototype.has](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has)                |
| `keys`       | similar [Map.prototype.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys)              |
| `set`        | similar [Map.prototype.set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set)                |
| `values`     | similar [Map.prototype.values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values)          |
| `@@iterator` | similar [Map.prototype[@@iterator]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator) |
| `filter`*    | similar [Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)      |
| `find`*      | similar [Array.prototype.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)          |
| `map`*       | similar [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)            |
| `reduce`*    | similar [Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)      |
__*__ on all _Array_ like methods, the `callback` receives the `key` instead of `index`.

## TODO
* Tests, of course
* Implement more _Array_ like methods (e.g. `concat`, `every`, `some` and `sort`)
