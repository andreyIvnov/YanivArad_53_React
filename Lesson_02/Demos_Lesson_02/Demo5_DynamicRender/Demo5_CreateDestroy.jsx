import { useState } from "react"

function Demo5_CreateDestroy() {
    console.log("render!")
    const [isExist, setIsExist] = useState(true)


  return (
    <div>
        {isExist ?  <h1>Hello!</h1> : null}
      {/* <button onClick={() => setIsExist(!isExist)}>Create / Destroy</button> */}
    </div>
  )
}

export default Demo5_CreateDestroy
