import { useEffect, useState } from "react"
import Ex6_Movie from "./Ex6_Movie"
import axios from "axios"
export default function Ex6_Movies() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get("https://api.tvmaze.com/shows")
      setMovies(data.splice(0,10))
    }
    fetchMovies()

  })
  return (
    <div style={{ border: "2px solid red" }}>

      <h4>Movies</h4>

      {
        movies.map((movie) => <Ex6_Movie movieData={movie} key={movie.id} style={{ border: "2px solid blue" }}  />)
      }

    </div>
  )
}
