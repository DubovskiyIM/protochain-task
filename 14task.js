const { o3: obj } = require('./protochain');
const prototypes = [];

const getPrototypes = (obj) => {
	let prototype = Reflect.getPrototypeOf(obj)
	if (prototype === null) return prototypes;
	prototypes.push(prototype.name)
	getPrototypes(prototype)
}

getPrototypes(obj);

console.log(prototypes);
