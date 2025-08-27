import {memo} from "react"
function Demo1_Child(props) {
  console.log("Child Render")
  return (
    <div style={{border: "2px solid blue"}}>Demo1_Child, counter: {props.counter}</div>
  )
}

export default memo(Demo1_Child)