import { useEffect, useLayoutEffect, useRef } from 'react'
import { React, Component, useState } from './CONST'
function Cell() {
  const start = Date.now()
  while (Date.now() - start < 1) {}
  return <span>1</span>
}
function _Cells() {
  return (
    <div className="cells">
      {new Array(1000).fill(0).map((_, index) => (
        <Cell key={index} />
      ))}
    </div>
  )
}
const Cells = React.memo(_Cells)

export default function LaneExample() {
  const [count, setCount] = useState(0)
  const button = useRef(null)
  const handleButtonClick = () => {
    console.info('handleButtonClick1==111111111111111111111111111111111')
    setCount((prev) => prev + 10)
  }
  const add = () => {
    setCount((prevState) => {
      return prevState + 1
    })
  }
  const onBeginTask = () => {
    setTimeout(() => add(), 500)
  }
  return (
    <div>
      <button ref={button} onClick={handleButtonClick}>
        增加2
      </button>
      <button onClick={onBeginTask} style={{ marginLeft: 16 }}>
        开始
      </button>
      <div style={{ maxWidth: '400px', wordBreak: 'break-word' }}>
        {Array.from(new Array(5000)).map((v, index) => (
          <span key={index}>{count}</span>
        ))}
      </div>
    </div>
  )
}
