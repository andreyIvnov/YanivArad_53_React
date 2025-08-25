import { useSelector } from "react-redux"

function Users() {
    const data = useSelector(state => state.users);

    return (
        <>
            <div style={{border: '3px solid blue', width: '80%', padding: '10px'}}>
                <h4>All users:</h4>
                <table border={2}>
                    <tbody>
                        {data && data.map(user => (
                            <tr key={user.id}>
                                <td style={{ padding: '6px'}}>{user.id}</td>
                                <td style={{ padding: '6px'}}>{user.firstName}</td>
                                <td style={{ padding: '6px'}}>{user.lastName}</td>
                                <td style={{ padding: '6px'}}>{user.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div style={{border: '3px solid green', width: '80%', padding: '10px'}}>
                <h4>Adult users:</h4>
                {data && data.filter(user => user.age >= 18).length > 0 ? (
                    <table border={2}>
                        <tbody>
                            {data.filter(user => user.age >= 18).map(user => (
                                <tr key={user.id}>
                                    <td style={{ padding: '6px'}}>{user.id}</td>
                                    <td style={{ padding: '6px'}}>{user.firstName}</td>
                                    <td style={{ padding: '6px'}}>{user.lastName}</td>
                                    <td style={{ padding: '6px'}}>{user.age}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No adult users found.</p>
                )}
            </div>
        </>
    )
}

export default Users