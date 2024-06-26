import { useEffect, useLayoutEffect } from 'react'
import { React, Component, useState } from './CONST'
const testhook = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, set] = useState()
}
class ClassComponent extends Component {
  state = {
    count: 0,
  }
  componentWillUnmount() {
    console.info('componentWillUnmount==')
  }
  render() {
    const { count } = this.state
    return (
      <div
        className="class border"
        onClick={() =>
          this.setState({
            count: count + 1,
          })
        }
      >
        {count}
      </div>
    )
  }
}

function FunctionComponent({ name }) {
  // useEffect(() => {
  //   debugger
  //   return () => {
  //     debugger
  //   }
  // }, [])
  // useLayoutEffect(() => {
  //   debugger
  //   return () => {
  //     debugger
  //   }
  // }, [])
  // const [state, setState] = useState('hello world')

  // useLayoutEffect(() => {
  //   let i = 0
  //   while (i <= 100000000) {
  //     i++
  //   }
  //   setState('world hello')
  // }, [])
  return <div className="function border">{name}</div>
}
// const App = () => {
//   const [show, setShow] = useState(true)
//   useEffect(() => {
//     return () => {
//       debugger
//     }
//   })
//   return (
//     <div className="box border">
//       <p style={{ border: '1px solid blue' }}>
//         <span>
//           方<span>hh</span>
//         </span>
//         <button
//           onClick={() => {
//             setShow(false)
//           }}
//         >
//           哈哈
//         </button>
//       </p>
//       <ClassComponent name="class-hh"></ClassComponent>
//       {show && <FunctionComponent name="function-hh"></FunctionComponent>}
//     </div>
//   )
// }
const App = () => {
  return (
    <div className="box border">
      <p>text</p>
      <FunctionComponent name="哇哈哈"></FunctionComponent>
      <ClassComponent name="哇哈哈"></ClassComponent>
    </div>
  )
}

console.log('react 版本===', React.version)
export default App
