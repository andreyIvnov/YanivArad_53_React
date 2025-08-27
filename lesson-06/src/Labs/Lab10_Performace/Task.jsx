import { memo } from "react"

function Task({ taskInfo }) {
    return (
        <div style={{ border: '1px solid blue', padding: '5px', borderRadius: '5px', marginBottom: '5px', textAlign: 'left' }}>
            <strong>Title:</strong> <span>{taskInfo.title}</span>&nbsp;&nbsp;&nbsp;
            <strong>Completed:</strong> <span>{taskInfo.completed ? "Yes" : "No"}</span>
        </div>
    )
}

export default memo(Task)