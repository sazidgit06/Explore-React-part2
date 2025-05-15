import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const handleBtn = () => {
    alert('button clicked');
  }

  const handleBtn1 = (num) => {
    alert((num))
  }

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h3>React core concept part2</h3>
      
      <button onClick={handleBtn}>Click me</button>
      <button onClick={() => handleBtn1(20)}>Click me</button>
      <button onClick={function handleBtn2(){
        alert('btn 2 clicked');
      }}>Click me</button>
      <button onClick={() => {
        alert('btn 3 clicked')
      }}>Click me</button>
    </>
  )
}

export default App
