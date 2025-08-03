
export default function Ex6_Movie(props) {
  return (
    <div style={{border: "2px solid blue"}}>

    Name: {props.movieData.name}<br/>
    <img src={props.movieData.image.medium} />

    </div>
  )
}
