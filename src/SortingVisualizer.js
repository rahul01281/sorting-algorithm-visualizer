import React, { useEffect, useState } from 'react'
import * as sortingAlgortihms from './sortingAlgorithms'
import './SortingVisualizer.css'

function SortingVisualizer() {
  const [array, setArray] = useState([])

  function resetArray() {
    const array = []
    for (let i = 0; i < 80; i++) {
      array.push(randomIntFromInterval(50, 500))
    }
    setArray(array)
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
        const color = animations[i][0] === 'comparison1' ? 'red' : 'black'
        const [comparison, barOneIdx, barTwoIdx] = animations[i]
        const barOneStyle = arrayBars[barOneIdx].style
        const barTwoStyle = arrayBars[barTwoIdx].style
        setTimeout(() => {
          barOneStyle.backgroundColor = color
          barTwoStyle.backgroundColor = color
        }, i * 5)
      } else {
        const [swap, barIndex, newHeight] = animations[i]
        if (barIndex === -1) continue

        const barStyle = arrayBars[barIndex].style
        setTimeout(() => {
          barStyle.height = `${newHeight}px`
        }, i * 5)
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
    </div>
  )
}

export default SortingVisualizer
