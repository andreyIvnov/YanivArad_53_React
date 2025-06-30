import Task from "./Task"


function Person({personData}) {
  return (
    <>
    <div style={{textAlign:'left', border:'8px solid red', width:'85%'}}>
        <h3>{personData.name} </h3>
        <h3>Tasks:  </h3>
        {personData.tasks && personData.tasks.map((task, i)=>{
            return(
                <div key={i}>
                    <Task taskData={task}/>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Person