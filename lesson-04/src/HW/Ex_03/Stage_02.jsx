import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Stage_02() {
    const [usersInput, setUsersInput] = useState({})
    const navigate = useNavigate();

    const submitNext = (e) => {
        e.preventDefault()
        
        if (localStorage.getItem("userData")) {
            localStorage.removeItem("userData")
        }

        localStorage.setItem("userData", JSON.stringify(usersInput));
        navigate('/stage_03')
    }

    const handleChange = (e) => {
        console.log("handleChange");
        const { value, name } = e.target;
        setUsersInput({ ...usersInput, [name]: value })
    }


    return (
        <>
            <div style={{background:'lightgrey', padding: '10px 20px 10px 20px'}}>
                <form onSubmit={submitNext}>
                    <strong>First Name: </strong><input required type="text" name="firstName" onChange={handleChange}/><br />
                    <strong>Last Name: </strong><input type="text" name="lastName" onChange={handleChange}/><br /> <br />
                    <button type='submit'>Next</button>
                </form>
            </div>
        </>
    )
}

export default Stage_02