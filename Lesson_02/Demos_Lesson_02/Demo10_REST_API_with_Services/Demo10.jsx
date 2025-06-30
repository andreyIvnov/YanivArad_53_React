import { useState } from "react"
import { getUsersEmails } from "./Demo10_UsersUtils"



function Demo10() {
    const [emails, setEmails] = useState([])

    const getEmails = async () => {
        const data = await getUsersEmails()
        setEmails(data)
    }

  return (
    <div>
      <button onClick={getEmails}>Get emails</button>

    <ul>
        {emails.map((email) => <li>{email}</li>)}
    </ul>

    </div>
  )
}

export default Demo10
