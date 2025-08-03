import { useEffect, useState } from "react"
import { getTop5TodosByUserId, getUserById } from "../../../Utils"
import Lab_6_Life_Cycle_Child from "./Lab_6_Life_Cycle_Child"


function Lab_6_Life_Cycle_Parent() {
  const [userId, setUserId] = useState(-1)

  return (
    <>
      <div>
        ID: <input type="number" name="userId" onChange={e => setUserId(e.target.value)} />
      </div>
      <br />
      <div>
        <Lab_6_Life_Cycle_Child userId={userId}/>
      </div>
    </>
  )
}

export default Lab_6_Life_Cycle_Parent 