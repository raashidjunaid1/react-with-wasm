import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import init, { add } from "wasm-lib";

function App() { 

  const [ans, setAns] = useState(0);


  const call = () => {
    init().then(() => {
      setAns(add(1, ans));
      console.log('add(1, ans) :>> ', add(1, ans));
    })
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
 
        <button onClick={call}>
          count is {ans}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
