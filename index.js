console.log("hello world", __filename);
console.log("hello world", __dirname);


const data = require("./data");

console.log(data)
console.log(data.favoriteCar)
data.sayHello();