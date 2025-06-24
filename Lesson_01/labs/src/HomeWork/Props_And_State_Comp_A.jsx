import Props_And_State_Comp_B from "./Props_And_State_Comp_B"


function Props_And_State_Comp_A() {
    return (
        <>
            <div style={{ backgroundColor: 'red', width: '400px', border: '2px solid red', padding: '5px 10px 20px 0', textAlign: 'left' }}>
                <h3>Comp A</h3>
                <br />
                <div style={{ backgroundColor: 'white', width: '70%' }}>Hello</div>
                <br />
                <Props_And_State_Comp_B />
            </div>
        </>
    )
}

export default Props_And_State_Comp_A