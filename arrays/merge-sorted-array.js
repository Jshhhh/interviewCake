function mergeArrays(myArray, alicesArray) {
  const result = [];
  // Combine the sorted arrays into one large sorted array
  if (!myArray.length) return alicesArray;
  if (!alicesArray.length) return myArray;
  
  let myPointer = 0;
  let alicesPointer = 0;
  
  while (myPointer < myArray.length || alicesPointer < alicesArray.length) {
    if (alicesArray[alicesPointer] === undefined || myArray[myPointer] < alicesArray[alicesPointer]) {
      result.push(myArray[myPointer]);
      myPointer++;
    } else {
      result.push(alicesArray[alicesPointer]);
      alicesPointer++;
    }
  }

  return result;
}


















// Tests

let desc = 'both arrays are empty';
let actual = mergeArrays([], []);
let expected = [];
assertDeepEqual(actual, expected, desc);

desc = 'first array is empty';
actual = mergeArrays([], [1, 2, 3]);
expected = [1, 2, 3];
assertDeepEqual(actual, expected, desc);

desc = 'second array is empty';
actual = mergeArrays([5, 6, 7], []);
expected = [5, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = 'both arrays have some numbers';
actual = mergeArrays([2, 4, 6], [1, 3, 7]);
expected = [1, 2, 3, 4, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = 'arrays are different lengths';
actual = mergeArrays([2, 4, 6, 8], [1, 7]);
expected = [1, 2, 4, 6, 7, 8];
assertDeepEqual(actual, expected, desc);

function assertDeepEqual(a, b, desc) {
  const aStr = JSON.stringify(a);
  const bStr = JSON.stringify(b);
  if (aStr !== bStr) {
    console.log(`${desc} ... FAIL: ${aStr} != ${bStr}`);
  } else {
    console.log(`${desc} ... PASS`);
  }
}