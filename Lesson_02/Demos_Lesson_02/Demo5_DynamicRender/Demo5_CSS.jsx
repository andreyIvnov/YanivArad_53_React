import { useState } from "react"
import "./Demo5.css"

function Demo5_CSS() {

    const [isRed, setIsRed] = useState(false)
    const [isVisible, setIsVisible] = useState(true)



    return (
        <div>

            {/* ? :  */}
            <h1 style={{ color: isRed ? 'red' : 'blue' }}>Hello</h1>
            <button onClick={() => setIsRed(!isRed)}>Change Color</button>

            <br />


            <h1 style={{ visibility: isVisible ? "visible" : 'hidden' }}>Show/Hide!</h1>
            <button onClick={() => setIsVisible(!isVisible)}>Show/Hide</button>

            <br />

            <div className={isRed ? 'redStyle' : 'greenStyle'}>
                <h1>Cool Div</h1>
            </div>
            <button onClick={() => setIsRed(!isRed)}>Change Color</button>



        </div>
    )
}

export default Demo5_CSS
