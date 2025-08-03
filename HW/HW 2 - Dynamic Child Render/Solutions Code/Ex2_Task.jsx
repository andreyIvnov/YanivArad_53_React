
export default function Ex2_Task(props) {
    // props = {taskData: {title, completed}}
  return (
    <div style={{border: "3px solid blue", width: "70%" }}>
        Title: {props.taskData.title} <br />
        Completed: {props.taskData.completed.toString()} <br />

    </div>
  )
}
