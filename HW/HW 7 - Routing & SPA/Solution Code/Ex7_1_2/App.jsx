import User from "./User"
import Users from "./Users"
import Todos from "./Todos"
import Posts from "./Posts"
import {Routes,Route} from 'react-router-dom'


function App() {


  return (
    <>
    <Routes>
        <Route path="" element={<Users />} />
        <Route path="/user/:id" element={<User />} >
            <Route path="todos" element={<Todos />} />
            <Route path="posts" element={<Posts />} />
        </Route>
        
    </Routes>
    </>
  )
}

export default App
