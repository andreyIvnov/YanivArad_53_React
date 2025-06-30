import React, { useState } from 'react'
import Demo7_Child from './Demo7_Child'

function Demo7_Parent() {

    const [dataFromChild, setDataFromChild] = useState("")


    const changeData = (data) => setDataFromChild(data)


    return (
        <div style={{ border: "2px solid green" }}>
            <h1>Demo 7 Parent</h1>

            <h3>Data from child: {dataFromChild} </h3>


            <Demo7_Child callback={changeData} />

        </div>
    )
}

export default Demo7_Parent
