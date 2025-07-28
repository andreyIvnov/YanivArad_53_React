import { useState } from "react"

function Demo1_Forms() {
    const [username, setUsername] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)

        if (username.length == 0) {
            alert("Must enter username")
            return
        } else {
            // send request to server.....
        }

    }


    return (
        // Default Behaviour
        <div>

            <form  onSubmit={handleSubmit}>
                <h1>Registration Form</h1>

                <input type="text" /> <br />
                <input type="color" /> <br />
                <br />
                Username: <input  onChange={e => setUsername(e.target.value)} type="text" /> <br />
                Password: <input type="password" /> <br />


                <button type="submit">Submit Form</button>


            </form>


        </div>
    )
}

export default Demo1_Forms