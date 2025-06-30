import { useState } from "react"
import Props_And_State_Comp_B from "./Props_And_State_Comp_B"


function Props_And_State_Comp_A() {
    const [inputText, setInputText] = useState("")
    return (
        <>
            <div style={{ backgroundColor: 'red', width: '400px', border: '2px solid red', padding: '5px 10px 20px 0', textAlign: 'left' }}>
                <h3>Comp A</h3>
                <input type="text" name="aInput" onChange={e => setInputText(e.target.value)} />
                <br />
                <br />
                <Props_And_State_Comp_B imputFromA={inputText} />
            </div>
        </>
    )
}

export default Props_And_State_Comp_A