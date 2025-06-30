import axios from "axios"


async function getItems(url) {
    const resp = await axios.get(url)
    return resp.data
}

async function getItem(url, id) {
    const resp = await axios.get(`${url}/${id}`)
    return resp.data
}


export {getItem, getItems}
