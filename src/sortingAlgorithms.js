//bubble sort
export function getBubbleSortAnimations(array) {
  let animations = []
  let auxiliaryArray = array.slice()
  bubbleSort(auxiliaryArray, animations)
  return animations
}

function bubbleSort(auxiliaryArray, animations) {
  let isSorted = false
  let counter = 0
  while (!isSorted) {
    isSorted = true
    for (let i = 0; i < auxiliaryArray.length - counter - 1; i++) {
      animations.push(['comparison1', i, i + 1])
      animations.push(['comparison2', i, i + 1])
      if (auxiliaryArray[i + 1] < auxiliaryArray[i]) {
        isSorted = false
        animations.push(['swap', i, auxiliaryArray[i + 1]])
        animations.push(['swap', i + 1, auxiliaryArray[i]])
        swap(auxiliaryArray, i, i + 1)
      }
    }
    counter++
  }
}

function swap(auxiliaryArray, i, j) {
  const temp = auxiliaryArray[j]
  auxiliaryArray[j] = auxiliaryArray[i]
  auxiliaryArray[i] = temp
}
