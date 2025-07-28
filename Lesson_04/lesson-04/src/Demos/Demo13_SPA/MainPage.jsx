import Demo13_About from "./Demo13_About"
import Demo13_Contact from "./Demo13_Contact"
import Demo13_Home from "./Demo13_Home"
import {Routes, Route, Link} from "react-router-dom"
import Demo13_Master from "./Demo13_Master"
import Demo13_Details from "./Demo13_Details"
import Demo13_ContactEmail from "./Demo13_ContactEmail"
import Demo13_ContactPhone from "./Demo13_ContactPhone"



function MainPage() {
  return (
    <div>

    <nav style={{display: "flex", justifyContent: "space-around", border: "1px solid black"}}>
        <Link to={"/"}>Home</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/products"}>Products</Link>
    </nav>



     <Routes>

        <Route path={""} element={<Demo13_Home />} />
        <Route path={"/about"} element={<Demo13_About />} />
        

        {/* /contact/email */}
        {/* /contact/phone */}
        <Route path={"/contact"} element={<Demo13_Contact />}>
            <Route path="email" element={<Demo13_ContactEmail />}/>
            <Route path="phone" element={<Demo13_ContactPhone />}/>

        </Route>
        
        <Route path={"/products"} element={<Demo13_Master />} />
        <Route path={"/product/:id"} element={<Demo13_Details />} />
        

    </Routes>
    {/* localhost:5173/ */}
   

    {/* <Demo13_Home /> */}
    {/* <Demo13_About /> */}
    {/* <Demo13_Contact /> */}
    <footer style={{backgroundColor: "darkblue", color: "white", width: "100%", height: "50px", textAlign: "center"}}>
        Copyright 2025
    </footer>




    </div>
  )
}

export default MainPage