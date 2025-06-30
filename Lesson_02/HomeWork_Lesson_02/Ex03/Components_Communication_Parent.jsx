import { useState } from "react"
import Components_Communication_Chils from "./Components_Communication_Chils";

function Components_Communication_Parent() {
    const [movies, setMovies] = useState([{
        id: 1, name: "Under the Dome", pic:
            "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg"
    },
    {
        id: 2, name: "Person of Interest", pic:
            "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg"
    },
    {
        id: 3, name: "Bitten", pic:
            "https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg"
    }]
    )

    const [selectedMovie, setSelectedMovie] = useState({});

    const SetSelectedMovie = (e) => {
        const { value: movieId } = e.target;
        if (+movieId > 0) {
            const indexOfMovieFromList = movies.findIndex(mov => mov.id === +movieId);
            if(indexOfMovieFromList !== -1){
                setSelectedMovie(movies[indexOfMovieFromList]);
            }
            else{
                setSelectedMovie(null);
            }
        }
        else{
            setSelectedMovie(null);
        }
    }

    return (
        <>
            <div style={{ border: '5px solid red', textAlign: 'center', width: '600px' }}>
                <h3>Pick a Movie</h3>
                <select name="pickedMovie" onChange={SetSelectedMovie}>
                    <option value="-0"></option>
                    {movies && movies.map(movie => {
                        return (
                            <option key={movie.id} value={movie.id}>{movie.name}</option>
                        )
                    })}
                </select> <br /> <br />
                <Components_Communication_Chils movieData={selectedMovie}/> <br />
            </div>
        </>
    )
}

export default Components_Communication_Parent