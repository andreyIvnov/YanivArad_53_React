import { useEffect, useState } from "react"
import useFetch from "./useFetch"

const useMunumalFetch = (url) => {
    const [minimalData, setMinimalData] = useState([])

    const data = useFetch(url);
    
    useEffect(() => {
        if(url){
            setMinimalData(data.map(item => {
                return { id: item.id, name: item.name };
            }))
        }
    }, [data])

    return minimalData;
}