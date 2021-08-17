let searchArrBainary = (arr, search) => {
  let counter = 0;
  let hIndex = arr.length - 1;
  let lIndex = 0;
  let middelIndex = Math.round((hIndex + lIndex) / 2);

  if (arr[lIndex] == search) {
    return lIndex;
  } else if (arr[hIndex] == search) {
    return hIndex;
  } else if (arr[middelIndex] == search) {
    return middelIndex;
  } else {
    while (
      arr[lIndex] != search &&
      arr[hIndex] != search &&
      arr[middelIndex] != search
    ) {
      counter++;
      if (search < arr[middelIndex]) {
        (hIndex = middelIndex),
          (middelIndex = Math.round((hIndex + lIndex) / 2));
      } else if (search > arr[middelIndex]) {
        (lIndex = middelIndex),
          (middelIndex = Math.round((hIndex + lIndex) / 2));
      }
      if (arr[lIndex] == search) {
        return lIndex;
      } else if (arr[hIndex] == search) {
        return hIndex;
      } else if (arr[middelIndex] == search) {
        return middelIndex;
      } else if (counter == 20) {
        return -1;
      }
    }
  }
};

let Array1 = [4, 8, 15, 16, 23, 42]; // 15 >> 2
let Array2 = [-131, -82, 0, 27, 42, 68, 179]; // 42 >> 4
let Array3 = [11, 22, 33, 44, 55, 66, 77]; // 90 >> -1
let Array4 = [1, 2, 3, 5, 6, 7]; // 4 >> -1

searchArrBainary(Array1, 15);

console.log(searchArrBainary(Array1, 15));
console.log(searchArrBainary(Array2, 42));
console.log(searchArrBainary(Array3, 90));
console.log(searchArrBainary(Array4, 4));

module.exports = searchArrBainary;
