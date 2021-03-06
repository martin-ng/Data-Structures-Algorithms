function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let newArr = new Array(left.length + right.length);
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      newArr[k++] = left[i++];
    } else {
      newArr[k++] = right[j++];
    }
  }

  while (i < left.length) {
    newArr[k++] = left[i++];
  }
  while (j < right.length) {
    newArr[k++] = right[j++];
  }
  return newArr;
}

// let arr = [8, 5, 2, 9, 5, 6, 3, 2]
let arr = [23, 10, 22, 13, 32, 42, 98];

mergeSort(arr);

/* 
The following merge sort function represents a less abstracted version by not using the Array prototype method, slice.
*/

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = new Array(mid);
  let right = new Array(arr.length - mid);

  let k = 0;
  for (let i = 0; i < left.length; i++) {
    left[i] = arr[k++];
  }
  for (let j = 0; j < right.length; j++) {
    right[j] = arr[k++];
  }

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let newArr = new Array(left.length + right.length);
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      newArr[k++] = left[i++];
    } else {
      newArr[k++] = right[j++];
    }
  }

  while (i < left.length) {
    newArr[k++] = left[i++];
  }
  while (j < right.length) {
    newArr[k++] = right[j++];
  }
  return newArr;
}
