import React from 'react'
import Demo13_ContactPhone from './Demo13_ContactPhone'
import Demo13_ContactEmail from './Demo13_ContactEmail'
import {Link, Outlet} from "react-router-dom"
function Demo13_Contact () {
  return (
    <div style={{width: "100%", height: "200px", backgroundColor: "purple"}}>
    This is a nice Contact page!
    <br />

    <Link to="phone">By Phone</Link> &nbsp;
    <Link to="email">By Email</Link> &nbsp;

  <Outlet />
    
  

    </div>
  )
}

export default Demo13_Contact 