import useCounter from "./useCounter"
function Demo4_CustomHook() {

    const [count, increment, decrement] = useCounter(10)
    const [count2, increment2, decrement2] = useCounter(50)


    return (
        <div>
            Count: {count}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button> 
            <br />

            Count: {count2}
            <button onClick={increment2}>+</button>
            <button onClick={decrement2}>-</button>

        </div>
    )
}

export default Demo4_CustomHook