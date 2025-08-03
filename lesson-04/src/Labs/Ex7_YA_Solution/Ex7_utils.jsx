import axios from "axios"


async function getUsers() {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
    return data
}


async function getUser(id) {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/" + id)
    return data
}

export  {getUser,getUsers}



