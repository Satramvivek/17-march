// ==========================
// 1. Named Function + Default Parameter + Return
function greet(name = "Guest") {
    return "Hello " + name;
}
console.log(greet("Vivek"));
console.log(greet());

// ==========================
// 2. Anonymous Function (stored in variable)
let add = function(a, b) {
    return a + b;
};
console.log("Sum:", add(5, 3));

// ==========================
// 3. Function Expression (use cases)
let multiply = function(a, b) {
    return a * b;
};
console.log("Multiply:", multiply(4, 2));

// ==========================
// 4. Arrow Function (ES6)
let square = (num) => num * num;
console.log("Square:", square(5));

// ==========================
// 5. IIFE (Immediately Invoked Function)
(function() {
    console.log("IIFE Executed");
})();

// ==========================
// 6. Callback Function
function processUser(name, callback) {
    callback(name);
}
processUser("Vivek", function(name) {
    console.log("Callback Hello " + name);
});

// ==========================
// 7. Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
let p1 = new Person("Vivek", 22);
console.log(p1);

// ==========================
// 8. Async Function
async function fetchData() {
    return "Data received";
}
fetchData().then(res => console.log(res));

// ==========================
// 9. Generator Function
function* generatorFunc() {
    yield 1;
    yield 2;
    yield 3;
}
let gen = generatorFunc();
console.log(gen.next().value);
console.log(gen.next().value);

// ==========================
// 10. Recursive Function
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}
console.log("Factorial:", factorial(5));

// ==========================
// 11. Higher-Order Function
function operate(a, b, func) {
    return func(a, b);
}
console.log("Higher Order:", operate(3, 4, add));

// ==========================
// 12. Nested Function
function outer() {
    function inner() {
        console.log("Inner Function");
    }
    inner();
}
outer();

// ==========================
// 13. Pure Function
function pureAdd(a, b) {
    return a + b;
}
console.log("Pure:", pureAdd(2, 3));

// ==========================
// 14. Default Parameter Function
function power(base, exponent = 2) {
    return base ** exponent;
}
console.log("Power:", power(3));

// ==========================
// 15. Rest Parameter Function
function sumAll(...nums) {
    return nums.reduce((acc, val) => acc + val, 0);
}
console.log("Rest Sum:", sumAll(1, 2, 3, 4));

// ==========================
// Function Expression Use Cases

// 1. Storing in Variable
let greetUser = function() {
    console.log("Hello User");
};
greetUser();

// 2. Callback Function
setTimeout(function() {
    console.log("Executed after 2 seconds");
}, 2000);



