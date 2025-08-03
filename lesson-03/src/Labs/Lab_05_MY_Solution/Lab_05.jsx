import { useState } from "react"
import { getUserById, updateUserData } from "../../../Utils";

function Lab_05() {
    const [inputUserId, setInputUserId] = useState(-1)
    const [getedUserData, setGetedUserData] = useState({})
    const [chengetUserData, setChengetUserData] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (inputUserId && inputUserId > 0) {
            const user = await getUserById(inputUserId)
            if (user && user.data) {
                setGetedUserData({ userId: user.data.id, name: user.data.name, email: user.data.email })
            }
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        const { value, name } = e.target;
        setChengetUserData({ ...chengetUserData, [name]: value });
    }

    const handleSubmitUp = async (e) => {
        e.preventDefault();
        const  updateResponse = await updateUserData(setInputUserId, chengetUserData)
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <h3>User ID : </h3><input type="number" name="userId" onChange={(e) => {
                            setInputUserId(Number(e.target.value))
                        }} />
                    <button name="submit" type="submit">Get Data</button><br />
                </form>

                <br /><br /><br />
                <form onSubmit={handleSubmitUp}>
                    Name : <input type="text" name="name" onChange={handleChange} defaultValue={getedUserData.name} /><br />
                    Email : <input type="text" name="email" onChange={handleChange} defaultValue={getedUserData.email} /><br />
                    <button name="update">Update</button>
                </form>
            </div>
        </>
    )
}

export default Lab_05   