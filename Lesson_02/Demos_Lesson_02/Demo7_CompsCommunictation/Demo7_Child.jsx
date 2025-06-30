import React, { useState } from 'react'

function Demo7_Child(props) { // {callback: (data) => setDataFromChild(data)}
    const [data, setData] = useState("Hello from child!!!")

  return (
    <div style={{border: "2px solid red"}}>
      <h1>Demo 7 Child</h1>
      Change parent data: <input type="text" onChange={e => setData(e.target.value)} />
      <button onClick={() => props.callback(data)}>Send Data to Parent</button>
    </div>
  )
}

export default Demo7_Child
