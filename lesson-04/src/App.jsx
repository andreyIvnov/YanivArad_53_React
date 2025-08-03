import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Stage_01 from './HW/Ex_03/Stage_01'
import Stage_02 from './HW/Ex_03/Stage_02'
import Stage_03 from './HW/Ex_03/Stage_03'
import Stage_04 from './HW/Ex_03/Stage_04'
import NewProduct from './HW/HW_08_Redux/NewProduct'
import TotalPrice from './HW/HW_08_Redux/TotalPrice'
import Products from './HW/HW_08_Redux/Products'
import MainPage from './HW/HW_08_Redux/MainPage'






function App() {

  return (
    <>
      <div>
        <MainPage/>
        {/* HW 07
        <Routes>
          <Route path={""} element={< Stage_01 />} />
          <Route path="/stage_02" element={< Stage_02 />} />
          <Route path="/stage_03" element={< Stage_03 />} />
          <Route path="/stage_04" element={< Stage_04 />} />
        </Routes> */}
      </div>
    </>
  )
}

export default App
