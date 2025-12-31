let arr = [2,3,1, 0];

console.log(arr.sort( (a,b) => b - a ));



function copySort(arr1){
    return [...arr1].sort();
}
let arr1 = ['HTML', 'CSS', 'JS'];

let cpy = copySort(arr1);
console.log(cpy);