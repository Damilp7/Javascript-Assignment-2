let array1 = [15,30,45,60];
let array2 = [5,6,3,10];


let dividedResult = (array1, array2) => {
  if (array1.length === array2.length) {
    return array1.map((item, index) => item / array2[index]);
  } else{
    return "Number of items in one array does not match the other array";
  }
}

console.log(dividedResult(array1, array2))