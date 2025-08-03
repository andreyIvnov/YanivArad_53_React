
import {Routes,Route} from 'react-router-dom'
import Stage1 from './Stage1'
import Stage2 from './Stage2'
import Stage3 from './Stage3'
import Stage4 from './Stage4'


function App() {


  return (
    <>
    <Routes>
    
      <Route path="/" element={<Stage1 />} />
      <Route path="/stage2" element={<Stage2 />} />
      <Route path="/stage3" element={<Stage3 />} />
      <Route path="/stage4" element={<Stage4 />} />

        
    </Routes>
    </>
  )
}

export default App
