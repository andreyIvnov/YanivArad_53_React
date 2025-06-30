import axios from "axios"
const usersUrl = "https://jsonplaceholder.typicode.com/users"



async function getUsers() {
    const resp = await axios.get(usersUrl)
    return resp.data
}

async function getUsersEmails() {
    const users = await getUsers()
    const emails = users.map((user) => user.email)
    return emails
}

export {getUsers, getUsersEmails}