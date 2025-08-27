import { memo } from "react"
function Demo3_Child(props) {
    console.log("Child Render")

    return (
        <div>Demo3_Child

        <button onClick={() => props.callback()}>Click Me</button>

        </div>
    )
}

export default memo(Demo3_Child)