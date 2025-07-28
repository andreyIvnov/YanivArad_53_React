import { useState } from 'react'
import './App.css'
import Home_Lab_07 from "./Labs/Lab_07_Routing_&_SPA/Details_Lab_07"
import UsersMaster_Lab_07 from './Labs/Lab_07_Routing_&_SPA/UsersMaster_Lab_07'
import Details_Lab_07 from './Labs/Lab_07_Routing_&_SPA/Details_Lab_07'
import { Routes, Route } from 'react-router-dom'
import UsersTodos_HW from './Labs/Lab_07_Routing_&_SPA/UsersTodos_HW'
import UsersPosts_HW from './Labs/Lab_07_Routing_&_SPA/UsersPosts_HW'


function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path={""} element={< UsersMaster_Lab_07 />} />
          <Route path={"/users/:id"} element={<Details_Lab_07 />} >
            <Route path='posts' element={<UsersPosts_HW/>}/>
            <Route path='todos' element={<UsersTodos_HW/>}/>
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
