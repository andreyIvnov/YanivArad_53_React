import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Ex_01_State from './Ex/Ex_01_State'
import Ex_02_Dynamic_Rendering from './Ex/Ex_02_Dynamic_Rendering'
import Ex_03_Components_Communication_Perent from './Ex/Ex_03_Components_Communication_Perent'
import Props_And_State_Comp_A from './HomeWork/Props_And_State_Comp_A'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Props_And_State_Comp_A />
    </>
  )
}

export default App
