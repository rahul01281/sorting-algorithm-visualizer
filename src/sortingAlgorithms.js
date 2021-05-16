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
  let auxiliaryArray = array.slice()
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

//selection sort
export function getSelectionSortAnimations(array) {
  let animations = []
  let auxiliaryArray = array.slice()
  selectionSort(auxiliaryArray, animations)
  return animations
}

function selectionSort(auxiliaryArray, animations) {
  let currentIdx = 0
  while (currentIdx < auxiliaryArray.length - 1) {
    let smallestIdx = currentIdx
    for (let i = currentIdx + 1; i < auxiliaryArray.length; i++) {
      animations.push(['comparison1', i, smallestIdx])
      animations.push(['comparison2', i, smallestIdx])
      if (auxiliaryArray[smallestIdx] > auxiliaryArray[i]) {
        smallestIdx = i
      }
    }
    animations.push(['swap', currentIdx, auxiliaryArray[smallestIdx]])
    animations.push(['swap', smallestIdx, auxiliaryArray[currentIdx]])
    swap(auxiliaryArray, smallestIdx, currentIdx)
    currentIdx++
  }
}

//merge sort
export function getMergeSortAnimations(array) {
  let animations = []
  let auxillaryArray = array.slice()
  mergeSort(auxillaryArray, 0, auxillaryArray.length - 1, animations)
  array = auxillaryArray
  return animations
}

function mergeSort(auxillaryArray, startIndex, endIndex, animations) {
  if (startIndex === endIndex) return
  const middleIndex = Math.floor((startIndex + endIndex) / 2)
  mergeSort(auxillaryArray, startIndex, middleIndex, animations)
  mergeSort(auxillaryArray, middleIndex + 1, endIndex, animations)
  merge(auxillaryArray, startIndex, middleIndex, endIndex, animations)
}

function merge(auxillaryArray, startIndex, middleIndex, endIndex, animations) {
  let sortArray = []
  let i = startIndex
  let j = middleIndex + 1
  while (i <= middleIndex && j <= endIndex) {
    animations.push(['comparision1', i, j])
    animations.push(['comparision2', i, j])
    if (auxillaryArray[i] <= auxillaryArray[j]) {
      sortArray.push(auxillaryArray[i++])
    } else {
      sortArray.push(auxillaryArray[j++])
    }
  }
  while (i <= middleIndex) {
    animations.push(['comparision1', i, i])
    animations.push(['comparision2', i, i])
    sortArray.push(auxillaryArray[i++])
  }
  while (j <= endIndex) {
    animations.push(['comparision1', j, j])
    animations.push(['comparision2', j, j])
    sortArray.push(auxillaryArray[j++])
  }
  for (let i = startIndex; i <= endIndex; i++) {
    animations.push(['comparision1', i, i - startIndex])
    animations.push(['swap', i, sortArray[i - startIndex]])
    animations.push(['comparision2', i, i - startIndex])
    auxillaryArray[i] = sortArray[i - startIndex]
  }
}

function swap(auxiliaryArray, i, j) {
  const temp = auxiliaryArray[j]
  auxiliaryArray[j] = auxiliaryArray[i]
  auxiliaryArray[i] = temp
}
