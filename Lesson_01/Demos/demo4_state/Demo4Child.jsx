function Demo4ChildComp(props) { // props: {person: {name, age}}
    console.log("Render Child")
    return <div>
        hello from child
    <br />

        name: {props.person.name} <br />
        age: {props.person.age} <br />
    </div>
}

export default Demo4ChildComp