import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Ex7_4_MoviePicComp() {

  const [moviePic, setMoviePic] = useState("")

  const params = useParams();
 
  useEffect(() =>
  {
    setMoviePic(sessionStorage["url"])
  },[params.id])

  return (
    <div className="App">
      <h3>Selected Movie Pic</h3>
      <img src={moviePic} />
    </div>
  );
}

export default Ex7_4_MoviePicComp;
