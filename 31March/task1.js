// 1. Named Function
function namedFunction() {
    console.log("1. Named Function");
}
namedFunction();


// 2 & 3. Anonymous + Function Expression
let funcExp = function () {
    console.log("2 & 3. Anonymous + Function Expression");
};
funcExp();


// 4. Arrow Function
let arrowFunc = (a, b) => {
    return a + b;
};
console.log("4. Arrow Function:", arrowFunc(2, 3));


// 5. IIFE
(function () {
    console.log("5. IIFE executed");
})();


// 6. Callback Function
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}
greet("Vivek", function () {
    console.log("6. Callback executed");
});


// 7. Constructor Function
function Person(name) {
    this.name = name;
}
let p1 = new Person("Vivek");
console.log("7. Constructor Function:", p1.name);


// 8. Async Function
async function asyncFunc() {
    return "8. Async Function result";
}
asyncFunc().then(res => console.log(res));


// 9. Generator Function
function* generatorFunc() {
    yield "9. Generator - Step 1";
    yield "Step 2";
}
let gen = generatorFunc();
console.log(gen.next().value);
console.log(gen.next().value);


// 10. Recursive Function
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}
console.log("10. Recursive Function:", factorial(5));


// 11. Higher-Order Function
function operate(a, b, fn) {
    return fn(a, b);
}
console.log("11. Higher-Order:", operate(5, 3, (x, y) => x + y));


// 12. Nested Function
function outer() {
    function inner() {
        console.log("12. Nested Function");
    }
    inner();
}
outer();


// 13. Pure Function
function pureAdd(a, b) {
    return a + b;
}
console.log("13. Pure Function:", pureAdd(4, 6));


// 14. Default Parameter Function
function multiply(a, b = 2) {
    return a * b;
}
console.log("14. Default Param:", multiply(5));


// 15. Rest Parameter Function
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b);
}
console.log("15. Rest Param:", sum(1, 2, 3, 4, 5));


// Extra: Return Statement Example
function returnExample(a, b) {
    return a + b;
}
console.log("Return Example:", returnExample(10, 20));