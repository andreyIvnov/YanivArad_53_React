import { useEffect, useState } from "react";
import axios from 'axios';
import Ex7_4_MovieComp from "./Ex7_4_Movie";

function Ex7_4_MoviesComp() {

  const [movies, setMovies] = useState([])

 useEffect(() =>
 {
    async function getMovies()
    {
      let resp = await axios.get("http://api.tvmaze.com/shows");
      setMovies(resp.data.splice(0,10))
    }
    getMovies();

 },[])

  return (
    <div className="App">
      <h3>Movies List</h3>
      {
        movies.map(item =>
          {
            return <Ex7_4_MovieComp movieData={item}  key={item.id} />
          })
      }
    </div>
  );
}

export default Ex7_4_MoviesComp;
