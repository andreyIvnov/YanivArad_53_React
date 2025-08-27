import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = async (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            if(url){
                const {data} = await axios.get(url);
                setData(data);
            }
        };

        fetchData();
    }, [])

    return data;
}

export default useFetch;