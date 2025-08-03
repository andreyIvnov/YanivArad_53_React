import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getUsersPostsByUserId } from "../../../Utils";

function UsersPosts_HW() {
    const urlObj = useParams();
    const [usersPosts, setUsersPosts] = useState([])

    const populateUsersPosts = async () => {
        if (urlObj && urlObj.id) {
            const { data : usersPosts} = await getUsersPostsByUserId(urlObj.id)
            if (usersPosts) {
                setUsersPosts(usersPosts);
            }
        }
    }

    useEffect(() => {
        populateUsersPosts();
    }, [])
    

    return (
        <>
            <div>
                <ul>
                    {usersPosts && usersPosts.map(post => {
                        return (
                            <li key={post.id}>{post.title}</li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default UsersPosts_HW