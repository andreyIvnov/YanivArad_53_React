import Demo15_Counter_Changer from "./Demo15_Counter_Changer"
import Demo15_Counter_Viewer from "./Demo15_Counter_Viewer"

function Demo15_Counter_Host() {
  return (
    <div style={{backgroundColor: "gray"}}>
        <h1>Counter Host</h1>
        <Demo15_Counter_Changer /> <Demo15_Counter_Viewer />

    </div>
  )
}

export default Demo15_Counter_Host