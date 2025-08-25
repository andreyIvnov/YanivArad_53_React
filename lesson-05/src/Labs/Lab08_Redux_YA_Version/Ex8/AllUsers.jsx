import {useSelector} from "react-redux"


function AllUsers() {
   const data =  useSelector((users) => users )


    return (
        <div style={{border: "3px solid green"}}>

        <h1>All users</h1>

        <table border={1}>
            <tbody>
                <tr>
                    <th>id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                </tr>
                {data.map((user) => {
                    return <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                        <td>{user.age}</td>
                    </tr>
                })}
            </tbody>
        </table>

        </div>
    )
}

export default AllUsers