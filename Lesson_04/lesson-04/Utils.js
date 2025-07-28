import axios from "axios"

const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";
const USERS_TODOS_ENDPOINT = "https://jsonplaceholder.typicode.com/todos";
const USERS_POSTS_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

const getAllUsers =  () => axios.get(USERS_ENDPOINT);

const getUserById =  (id) => axios.get(`${USERS_ENDPOINT}/${id}`);

const getUsersTodosByUserId = (userId) => axios.get(`${USERS_TODOS_ENDPOINT}?userId=${userId}`)

const getUsersPostsByUserId = (userId) => axios.get(`${USERS_POSTS_ENDPOINT}?userId=${userId}`)

export { getAllUsers, getUserById, getUsersTodosByUserId, getUsersPostsByUserId }