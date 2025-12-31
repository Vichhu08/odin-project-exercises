function filterRangeInPlace (arr, a, b){
    return arr.filter(num => a <= num && num <= b );
}

let arr = [2,34,4,1,2,5,7,3];

let mod = filterRangeInPlace(arr, 2, 5);
console.log(filterRangeInPlace(arr, 2, 5));

//modifying the array

function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arr2 = [5, 3, 8, 1];

filterRangeInPlace(arr2, 1, 4); // removed the numbers except from 1 to 4

console.log( arr2 ); // [3, 1]
