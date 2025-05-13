import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WhenCondition from './components/WhenCondition'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WhenCondition />
    </>
  )
}

export default App
