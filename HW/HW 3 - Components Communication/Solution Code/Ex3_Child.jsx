
export default function Ex3_Child(props) { // props = {selectedMovie: {id, name, pic}}
    console.log(props.selectedMovie)
  return (
    <div style={{border: "2px solid blue", alignSelf: "flex-start", width: "70%"}}>

   Name: {props.selectedMovie?.name} <br />


    <img src={props.selectedMovie.pic} alt="movie" />

    </div>
  )
}
