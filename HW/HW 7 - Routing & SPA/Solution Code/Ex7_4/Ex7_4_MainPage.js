import { Route, Routes } from "react-router-dom";
import Ex7_4_MoviesComp from "./Ex7_4_Movies";
import Ex7_4_MoviePicComp from "./Ex7_4_MoviePic";

function Ex7_4_MainPageComp() {
  return (
    <div className="App">
    
    <h1>Movies Web Site</h1>

        <div style={{"width":"50%", "float":"left"}}>

        <Ex7_4_MoviesComp />

        </div>

    <div style={{"width":"50%", "float":"right"}}>
      
        <Routes>
          <Route path="/movie/:id" element={<Ex7_4_MoviePicComp />} />
        </Routes>

    </div>
    </div>
  );
}

export default Ex7_4_MainPageComp;
