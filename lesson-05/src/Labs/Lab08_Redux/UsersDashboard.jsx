import AddNewUser from "./AddNewUser"
import Users from "./Users"

function UsersDashboard() {
  return (
    <>
      <h3>Users</h3>
      <div style={{ border: '3px solid red', padding: '20px 10px 20px 0', textAlign: 'left', width: '300px' }}>
        <AddNewUser />
        <Users />
      </div>
    </>
  )
}

export default UsersDashboard