import Ex2_Task from "./Ex2_Task"

export default function Ex2_Person(props) {
    // props= {personData: {name: "AVI", tasks: []}}
    return (
        <div
            style={{ border: "3px solid red", width: "70%" }}
        >
            <h2>{props.personData.name}</h2>

            {props.personData.tasks.map((task) => {
                return <Ex2_Task taskData={task} />
            })}

        </div>
    )
}
