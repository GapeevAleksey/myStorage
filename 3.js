'use strict'

let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

options.bool = false;
options.color = {
    border: "black",
    background: "red",
}

delete options.bool;

console.log(options);

for (let key in options) {
    console.log(key + ': ' + options[key]);
}

console.log(Object.keys(options).length);