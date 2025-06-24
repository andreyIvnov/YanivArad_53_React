function Demo2ChildComp(props) {
    console.log(props)
    return <div>
        <h3>Demo 2 Child</h3>
        Name: {props.name} <br />
        Age: {props.age} <br />
        Adult: {props.isAdult.toString()} <br />

        city: {props.address.city}

        <h3>Demo 2 Footer</h3>
    </div>
}

export default Demo2ChildComp