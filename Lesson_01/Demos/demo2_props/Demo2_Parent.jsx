import Demo2ChildComp from "./Demo2_Child"

function Demo2ParentComp( ) {

    // JSX
    return <div>
        {/* props */}
        <h2>Demo2 Parent</h2>
   
        {/* curly brackets */}
        <Demo2ChildComp name={"Avi"} age={30} isAdult={true} address={{city: "Haifa", street: "Leon Blum"}} />
        <Demo2ChildComp name={"Dana"} age={40} isAdult={false} address={{city: "Tel Aviv", street: "Hertzel"}} />

        <h2>Demo2 Parent Footer</h2>

    </div>

}

export default Demo2ParentComp