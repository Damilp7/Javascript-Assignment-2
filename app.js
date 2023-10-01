let dividedResult = (array1, array2) => {
  if (array1.length === array2.length) {
    let result = array1.map((item, index) => item / array2[index]);
    return result;
  } else{
    return "Number of items in one array does not match the other array";
  }
}
console.log(dividedResult([15,30,45,60], [5,6,3,10]));