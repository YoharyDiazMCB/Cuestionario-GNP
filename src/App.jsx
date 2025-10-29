import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/scss/Styles.scss'
import Cuestionario from './cuestionario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cuestionario></Cuestionario>
    </>
  )
}

export default App
