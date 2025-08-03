import { useNavigate } from "react-router-dom";

function Ex7_4_MovieComp(props) {

  const nav = useNavigate()

 const showPic = () =>
 {
  sessionStorage["url"] = props.movieData.image.medium;
  nav("/movie/" + props.movieData.id)
 }

  return (
    <div>
    <div style={{width : "300px", border : "2px solid red"}}>

      <h3>{props.movieData.name}</h3> <br/>

      <button onClick={showPic}>Show Pic</button>

    </div>
    <br/>
    </div>
  );
}

export default Ex7_4_MovieComp;
