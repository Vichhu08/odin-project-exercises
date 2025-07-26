function add7 (a){
    return a + 7;
}

function multiply (a, b){
    return a*b;
}

function cap ( str){
    if (str.charAt(0) === str.charAt(0).toUpperCase()){
        return str;
    }
    return null;
}

function getLastChar(str) {
  return str.slice(-1);
}
let a = 10, b = 5;
let str = "Hello Brother and everyone";

console.log(add7(a));
console.log(multiply(a, b));
console.log(cap(str));
console.log(getLastChar(str));