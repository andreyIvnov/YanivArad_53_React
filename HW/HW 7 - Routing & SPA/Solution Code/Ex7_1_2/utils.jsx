
import axios from "axios"

async function getAll(url) {
    return axios.get(url)

}

async function getItem(url, id) {
    return axios.get(`${url}/${id}`)
  

}

async function getUserItems(url, id) {
    const { data } = await axios.get(`${url}?userId=${id}`)
    return data.map(data => data.title)
}

export { getAll, getUserItems, getItem }