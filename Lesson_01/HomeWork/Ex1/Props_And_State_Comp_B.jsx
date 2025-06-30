import Props_And_State_Comp_C from "./Props_And_State_Comp_C"

function Props_And_State_Comp_B({imputFromA}) {
    return (
        <div style={{ backgroundColor: 'blue', width:'60%', padding: '5px 10px 20px 0', textAlign: 'left' }}>
            <h3>Comp B</h3>
            <Props_And_State_Comp_C imputFromA={imputFromA}/>
        </div>
    )
}

export default Props_And_State_Comp_B