// orderedIntersection Algorithm

/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/
//             a
const arrA1 = [0, 1, 2, 2, 2, 7];
//             b
const arrB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const arrA2 = [0, 1, 2, 2, 2, 7];
const arrB2 = [2, 2];
const expected2 = [2];

const arrA3 = [0, 1, 2, 2, 2, 7];
const arrB3 = [10];
const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n) linear, n = max(sortedA.length, sortedB.length) when there are
 *    dupes we may end up looping over all items of longer arr.
 * - Space: O(n) linear, n = shorter array length.
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} returns The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {
  let res = new Set();
  let shorterArray;
  let longerArray;

  if (sortedA.length < sortedB.length) {
    shorterArray = sortedA;
    longerArray = sortedB;
  } else {
    shorterArray = sortedB;
    longerArray = sortedA;
  }

  let shorterSet = new Set(shorterArray);

  for (let i = 0; i < longerArray.length; i++) {
    if (shorterSet.has(longerArray[i]) && !res.has(longerArray[i])) {
      res.add(longerArray[i]);
    }
  }

  return Array.from(res);
}

console.log(orderedIntersection(arrA1, arrB1));