import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import App from './pages/ExamplePage'
console.red = (...args) => {
  args.forEach((arg) => {
    console.info(`%c${arg}`, 'color: red;')
  })
}
// ReactDOM.render(<App></App>, document.getElementById('root'))

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
