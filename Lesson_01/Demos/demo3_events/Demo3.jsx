function Demo3Comp() {


    const handleClick = () => {
        console.log("Hello World!")
    }

    const handleInput = (event) => {
        console.log(event.target.value)
    }


    const style = {backgroundColor: "gray"}


    return <div style={style}>
        <h2   >Demo 3</h2>

        <button onClick={handleClick} >Click</button>
        <button onClick={() => console.log("Hello World 2!")}>Click 2</button>

        <input onChange={handleInput} type="text" />

        <input type="checkbox" onChange={(event) => console.log(event.target.checked)} />

        <select onChange={(e) => console.log(e.target.value)} >
            <option value="Haifa">Haifa</option>
            <option value="TLV">TLV</option>
            <option value="Ashdod">Ashdod</option>
        </select>

        <h2>Demo 3 Footer</h2>
    </div>

}

export default Demo3Comp