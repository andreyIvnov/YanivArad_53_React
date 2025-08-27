import axios from "axios";
const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";
const TODOS_ENDPOINT = "https://jsonplaceholder.typicode.com/todos";

const getAllUsers = () => axios.get(USERS_ENDPOINT);
const getTodosByUserId = (userId, limit) => axios.get(`${TODOS_ENDPOINT}?userId=${userId}` + (limit ? `&_limit=${limit}` : ''));

export { getAllUsers, getTodosByUserId }