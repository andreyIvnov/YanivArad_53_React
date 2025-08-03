import { useState } from "react"
import Ex6_Child from "./Ex6_Child"

function Ex6_Parent() {
    const [id, setId] = useState(0)
    return (
        <div>

            <input onChange={e => setId(e.target.value)} type="number" min={1} max={10} />
            <br />

            <Ex6_Child id={id} />

        </div>
    )
}

export default Ex6_Parent