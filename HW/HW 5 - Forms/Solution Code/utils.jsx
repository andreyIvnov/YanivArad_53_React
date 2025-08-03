import axios from "axios"

const getUserData = async (userId) => {
    const { data: user } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    return user
}

const updateUserData = async (userId, userData) => {
    const { data: user } = await axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`, userData)
    return user
}

export { getUserData, updateUserData }