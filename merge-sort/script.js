function mergeSort (arr) {
  if (arr.length <= 1) {
    return arr
  }

  const mid = Math.floor(arr.length / 2)
  const leftHalf = arr.slice(0, mid)
  const rightHalf = arr.slice(mid)

  return merge(mergeSort(leftHalf), mergeSort(rightHalf))
}

function merge (leftArr, rightArr) {
  const result = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex])
      leftIndex++
    } else {
      result.push(rightArr[rightIndex])
      rightIndex++
    }
  }

  return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex))
}

// Example usage:
const arr1 = [3, 2, 1, 13, 8, 5, 0, 1]
console.log(mergeSort(arr1)) // Output: [0, 1, 1, 2, 3, 5, 8, 13]

const arr2 = [105, 79, 100, 110]
console.log(mergeSort(arr2)) // Output: [79, 100, 105, 110]
