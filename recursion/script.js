function fibs (n) {
  const fibSequence = [0, 1]
  for (let i = 2; i < n; i++) {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2])
  }
  return fibSequence.slice(0, n)
}
console.log(fibs())

// recursive function
function fibsRec (n) {
  if (n === 1) {
    return [0]
  } else if (n === 2) {
    return [0, 1]
  } else {
    const fibSequence = fibsRec(n - 1)
    fibSequence.push(fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2])
    return fibSequence
  }
}

// Example usage:
const resultRec = fibsRec()
console.log(resultRec)
