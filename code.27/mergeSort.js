//

function mergeSort(arr) {
  const len = arr.length;

  if (len > 1) {
    const mid = Math.floor(len / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
  } else {
    return arr;
  }
}

//

function merge(left, right) {
  let i = 0;
  let j = 0;
  let arr = [];

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr.push(left[i]);
      i++;
    } else {
      arr.push(right[j]);
      j++;
    }
  }

  return arr.concat(left.slice(i)).concat(right.slice(j));
}

module.exports = mergeSort;
