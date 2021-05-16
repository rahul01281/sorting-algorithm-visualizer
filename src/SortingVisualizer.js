import React, { useEffect, useState } from 'react'
import * as sortingAlgortihms from './sortingAlgorithms'
import './SortingVisualizer.css'

let WINDOW_HEIGHT = window.innerHeight
let NUMBER_OF_ARRAY_BARS = 20

const PRIMARY_COLOR = '#ebb134'
const SECONDARY_COLOR = 'black'
const ANIMATION_SPEED = 5

function SortingVisualizer() {
  const [array, setArray] = useState([])

  function resetArray() {
    const array = []
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(25, WINDOW_HEIGHT - 100))
    }
    setArray(array)
    const allBars = document.getElementsByClassName('array-bar')
    for (let i = 0; i < allBars.length; i++) {
      allBars[i].style.backgroundColor = '#ebb134'
    }
  }

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1 + min))
  }

  function disableButtons() {
    document.getElementById('mergeSort').disabled = true
    document.getElementById('mergeSort').style.color = 'gray'
    document.getElementById('mergeSort').style.cursor = 'default'
    document.getElementById('mergeSort').style.border = '3px solid gray'

    document.getElementById('selectionSort').disabled = true
    document.getElementById('selectionSort').style.color = 'gray'
    document.getElementById('selectionSort').style.cursor = 'default'
    document.getElementById('selectionSort').style.border = '3px solid gray'

    document.getElementById('bubbleSort').disabled = true
    document.getElementById('bubbleSort').style.color = 'gray'
    document.getElementById('bubbleSort').style.cursor = 'default'
    document.getElementById('bubbleSort').style.border = '3px solid gray'

    document.getElementById('insertionSort').disabled = true
    document.getElementById('insertionSort').style.color = 'gray'
    document.getElementById('insertionSort').style.cursor = 'default'
    document.getElementById('insertionSort').style.border = '3px solid gray'

    document.getElementById('generateArray').disabled = true
    document.getElementById('generateArray').style.color = 'gray'
    document.getElementById('generateArray').style.cursor = 'default'
    document.getElementById('generateArray').style.border = '3px solid gray'
  }

  function enableButtons() {
    document.getElementById('mergeSort').disabled = false
    document.getElementById('mergeSort').style.color = 'white'
    document.getElementById('mergeSort').style.cursor = 'pointer'
    document.getElementById('mergeSort').style.border = '3px solid white'

    document.getElementById('selectionSort').disabled = false
    document.getElementById('selectionSort').style.color = 'white'
    document.getElementById('selectionSort').style.cursor = 'pointer'
    document.getElementById('selectionSort').style.border = '3px solid white'

    document.getElementById('bubbleSort').disabled = false
    document.getElementById('bubbleSort').style.color = 'white'
    document.getElementById('bubbleSort').style.cursor = 'pointer'
    document.getElementById('bubbleSort').style.border = '3px solid white'

    document.getElementById('insertionSort').disabled = false
    document.getElementById('insertionSort').style.color = 'white'
    document.getElementById('insertionSort').style.cursor = 'pointer'
    document.getElementById('insertionSort').style.border = '3px solid white'

    document.getElementById('generateArray').disabled = false
    document.getElementById('generateArray').style.color = 'white'
    document.getElementById('generateArray').style.cursor = 'pointer'
    document.getElementById('generateArray').style.border = '3px solid white'
  }

  function bubbleSort() {
    disableButtons()
    const animations = sortingAlgortihms.getBubbleSortAnimations(array)
    for (let i = 0; i < animations.length; i++) {
      const isColorChange =
        animations[i][0] === 'comparison1' || animations[i][0] === 'comparison2'
      const arrayBars = document.getElementsByClassName('array-bar')
      if (isColorChange) {
        const color =
          animations[i][0] === 'comparison1' ? SECONDARY_COLOR : PRIMARY_COLOR
        const [comparison, barOneIdx, barTwoIdx] = animations[i]
        const barOneStyle = arrayBars[barOneIdx].style
        const barTwoStyle = arrayBars[barTwoIdx].style
        setTimeout(() => {
          barOneStyle.backgroundColor = color
          barTwoStyle.backgroundColor = color
        }, i * ANIMATION_SPEED)
      } else {
        const [swap, barIndex, newHeight] = animations[i]
        if (barIndex === -1) continue

        const barStyle = arrayBars[barIndex].style
        setTimeout(() => {
          barStyle.height = `${newHeight}px`
        }, i * ANIMATION_SPEED)
      }
    }

    const RESTORE_TIME = parseInt(ANIMATION_SPEED * animations.length)
    setTimeout(() => enableButtons(), RESTORE_TIME)
  }

  function insertionSort() {
    disableButtons()
    const animations = sortingAlgortihms.getInsertionSortAnimations(array)
    console.log(animations)
    for (let i = 0; i < animations.length; i++) {
      const isColorChange =
        animations[i][0] === 'comparison1' || animations[i][0] === 'comparison2'
      const arrayBars = document.getElementsByClassName('array-bar')
      if (isColorChange) {
        const color =
          animations[i][0] === 'comparison1' ? SECONDARY_COLOR : PRIMARY_COLOR
        const [comparison, barOneIdx, barTwoIdx] = animations[i]
        const barOneStyle = arrayBars[barOneIdx].style
        const barTwoStyle = arrayBars[barTwoIdx].style
        setTimeout(() => {
          barOneStyle.backgroundColor = color
          barTwoStyle.backgroundColor = color
        }, i * ANIMATION_SPEED)
      } else {
        const [swap, barIndex, newHeight] = animations[i]
        if (barIndex === -1) continue

        const barStyle = arrayBars[barIndex].style
        setTimeout(() => {
          barStyle.height = `${newHeight}px`
        }, i * ANIMATION_SPEED)
      }
    }
    const RESTORE_TIME = parseInt(ANIMATION_SPEED * animations.length)
    setTimeout(() => enableButtons(), RESTORE_TIME)
  }

  function selectionSort() {
    disableButtons()
    const animations = sortingAlgortihms.getSelectionSortAnimations(array)
    console.log(animations)
    for (let i = 0; i < animations.length; i++) {
      const isColorChange =
        animations[i][0] === 'comparison1' || animations[i][0] === 'comparison2'
      const arrayBars = document.getElementsByClassName('array-bar')
      if (isColorChange) {
        const color =
          animations[i][0] === 'comparison1' ? SECONDARY_COLOR : PRIMARY_COLOR
        const [comparison, barOneIdx, barTwoIdx] = animations[i]
        const barOneStyle = arrayBars[barOneIdx].style
        const barTwoStyle = arrayBars[barTwoIdx].style
        setTimeout(() => {
          barOneStyle.backgroundColor = color
          barTwoStyle.backgroundColor = color
        }, i * ANIMATION_SPEED)
      } else {
        const [swap, barIndex, newHeight] = animations[i]
        if (barIndex === -1) continue

        const barStyle = arrayBars[barIndex].style
        setTimeout(() => {
          barStyle.height = `${newHeight}px`
        }, i * ANIMATION_SPEED)
      }
    }
    const RESTORE_TIME = parseInt(ANIMATION_SPEED * animations.length)
    setTimeout(() => enableButtons(), RESTORE_TIME)
  }

  function mergeSort() {
    disableButtons()
    const animations = sortingAlgortihms.getMergeSortAnimations(array)
    for (let i = 0; i < animations.length; i++) {
      const isColorChange =
        animations[i][0] == 'comparision1' || animations[i][0] == 'comparision2'
      const arrayBars = document.getElementsByClassName('array-bar')
      if (isColorChange === true) {
        const [comparision, barOneIndex, barTwoIndex] = animations[i]
        const color =
          animations[i][0] == 'comparision1' ? SECONDARY_COLOR : PRIMARY_COLOR
        const barOneStyle = arrayBars[barOneIndex].style
        const barTwoStyle = arrayBars[barTwoIndex].style
        setTimeout(() => {
          barOneStyle.backgroundColor = color
          barTwoStyle.backgroundColor = color
        }, i * ANIMATION_SPEED)
      } else {
        setTimeout(() => {
          const [swap, barOneIdx, newHeight] = animations[i]
          const barOneStyle = arrayBars[barOneIdx].style
          barOneStyle.height = `${newHeight}px`
        }, i * ANIMATION_SPEED)
      }
    }
    const RESTORE_TIME = parseInt(ANIMATION_SPEED * animations.length)
    setTimeout(() => enableButtons(), RESTORE_TIME)
  }

  useEffect(() => {
    resetArray()
  }, [])

  return (
    <div>
      <header>
        <div className='buttons-div'>
          <button id='generateArray' onClick={() => resetArray()}>
            Generate new array
          </button>
          <button id='bubbleSort' onClick={() => bubbleSort()}>
            Bubble sort
          </button>
          <button id='insertionSort' onClick={() => insertionSort()}>
            Insertion sort
          </button>
          <button id='selectionSort' onClick={() => selectionSort()}>
            Selection sort
          </button>
          <button id='mergeSort' onClick={() => mergeSort()}>
            Merge sort
          </button>
        </div>
      </header>
      <div className='array-container'>
        {array.map((value, idx) => (
          <div
            className='array-bar'
            key={idx}
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default SortingVisualizer
