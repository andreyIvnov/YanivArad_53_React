
function Task({ taskData }) {
    return (
        <>
            <div style={{ textAlign: 'left', border: '6px solid blue', width: '85%' }}>
                {taskData && 
                <div>
                    Title: {taskData.title}  <br />
                    Completed: {taskData.completed.toString()}
                </div>
                }
            </div>
        </>
    )
}

export default Task