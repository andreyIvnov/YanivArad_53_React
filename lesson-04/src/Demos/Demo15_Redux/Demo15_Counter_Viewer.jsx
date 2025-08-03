import {useSelector} from "react-redux"
function Demo15_Counter_Viewer() {
    const storeData = useSelector(store => store.counter )


  return (
    <div style={{backgroundColor: "blue"}}>
        <h1>Counter Viewer</h1>

        <h1>Counter: {storeData} </h1>


    </div>
  )
}

export default Demo15_Counter_Viewer