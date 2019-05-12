// Sort from min to max | best case (n), average case (n^2), worst case (n^2)
let array = [5, 4, 3, 2, 1, 0];
for (let j = 1; j < array.length; j++) {
  let key = array[j];
  let i = j - 1;
  while (i >= 0 && array[i] > key) {
    array[i + 1] = array[i];
    i--;
  }
  array[i + 1] = key;
}
console.log(array);
