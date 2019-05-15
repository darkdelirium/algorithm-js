// Merge sort from min to max | best case n*log(n), average case n*log(n), worst case n*log(n)

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const right = array.slice(mid);
  const left = array.slice(0, mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let output = [];
  let indexL = 0,
    indexR = 0;
  while (indexL < left.length && indexR < right.length) {
    if (left[indexL] < right[indexR]) {
      output.push(left[indexL]);
      indexL++;
    } else {
      output.push(right[indexR]);
      indexR++;
    }
  }
  return output.concat(left.slice(indexL)).concat(right.slice(indexR));
}

const test = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let result = [];
result = mergeSort(test);
console.log(result);
