function sayHello(name) {
    console.log(`Hello, ${name}!`);
}

// test
const names = ["Alice", "Bob", "Charlie"];

// using forEach
names.forEach(sayHello);

// using for
for (let i = 0; i < names.length; i++) {
    console.log(`Hello, ${names[i]}!`);
}
