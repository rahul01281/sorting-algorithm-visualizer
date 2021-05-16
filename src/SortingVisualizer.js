import React, { useEffect, useState } from 'react'
import * as sortingAlgortihms from './sortingAlgorithms'
import './SortingVisualizer.css'

let WINDOW_WIDTH = window.innerWidth
let WINDOW_HEIGHT = window.innerHeight
let NUMBER_OF_ARRAY_BARS = 50

const PRIMARY_COLOR = 'rgba(66, 134, 244, 0.8)' //Normal color of bars
const SECONDARY_COLOR = '#34eb37' //Color of bars when they are being compared

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
      allBars[i].style.backgroundColor = 'rgba(66, 134, 244, 0.8)'
    }
  }

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1 + min))
  }

  function bubbleSort() {
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
          console.log('compare')
        }, i * 10)
      } else {
        const [swap, barIndex, newHeight] = animations[i]
        if (barIndex === -1) continue

        const barStyle = arrayBars[barIndex].style
        setTimeout(() => {
          barStyle.height = `${newHeight}px`
        }, i * 10)
      }
    }
  }

  function insertionSort() {
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
        }, i * 10)
      } else {
        const [swap, barIndex, newHeight] = animations[i]
        if (barIndex === -1) continue

        const barStyle = arrayBars[barIndex].style
        setTimeout(() => {
          barStyle.height = `${newHeight}px`
        }, i * 10)
      }
    }
  }

  useEffect(() => {
    resetArray()
  }, [])

  return (
    <div>
      <div className='array-container'>
        {array.map((value, idx) => (
          <div
            className='array-bar'
            key={idx}
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
      <button onClick={() => resetArray()}>Generate new array</button>
      <button onClick={() => bubbleSort()}>Bubble sort</button>
      <button onClick={() => insertionSort()}>Insertion sort</button>
    </div>
  )
}

export default SortingVisualizer
