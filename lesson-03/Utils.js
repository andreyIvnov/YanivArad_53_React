import axios from "axios";

const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";
const TODOS_ENDPOINT = "https://jsonplaceholder.typicode.com/todos";

const getUserById = (userId) => axios.get(`${USERS_ENDPOINT}/${userId}`);

const getDataByUrlAndId = (url, id) => axios.get(`${url}/${id}`);

const getTop5TodosByUserId = (userId) => axios.get(`${TODOS_ENDPOINT}?userId=${userId}&_limit=5`)

const updateUserData = (userId, newDataToSet) => axios.put(`${USERS_ENDPOINT}/${userId}`, newDataToSet);

export { getUserById, updateUserData, getTop5TodosByUserId }