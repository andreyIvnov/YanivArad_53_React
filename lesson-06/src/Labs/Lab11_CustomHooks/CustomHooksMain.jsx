import useMinimalFetch from "../ex11_1&2/src/hooks/useMinimalFetch";

const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

function CustomHooksMain() {
    const data = useMinimalFetch(USERS_ENDPOINT);

    return (
        <div>
            {data && data.length > 0 && 
                console.log(data)
            }
        </div>
    )
}

export default CustomHooksMain