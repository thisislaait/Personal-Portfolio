import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen flex justify-center items-center'>
        <h1 className='text-black text-6xl text-center'>
          hello
        </h1>
      </div>
    </>
  )
}

export default App
