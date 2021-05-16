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

//insertion sort
export function getInsertionSortAnimations(array) {
  let animations = []
  let auxiliaryArray = array.slice(0)
  insertionSort(auxiliaryArray, animations)
  return animations
}

function insertionSort(auxiliaryArray, animations) {
  for (let i = 1; i < auxiliaryArray.length; i++) {
    let j = i
    animations.push(['comparison1', j, j - 1])
    animations.push(['comparison2', j, j - 1])
    while (j > 0 && auxiliaryArray[j] < auxiliaryArray[j - 1]) {
      animations.push(['swap', j, auxiliaryArray[j - 1]])
      animations.push(['swap', j - 1, auxiliaryArray[j]])
      swap(auxiliaryArray, j - 1, j)
      j--
    }
  }
}

function swap(auxiliaryArray, i, j) {
  const temp = auxiliaryArray[j]
  auxiliaryArray[j] = auxiliaryArray[i]
  auxiliaryArray[i] = temp
}
