import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getUsersPostsByUserId } from "../../Utils";

function Routin_SPA_HW_Posts() {
    const [allPosts, setAllPosts] = useState([]);
    const urlObj = useParams();

    const getUsersPosts = async () => {
        if (urlObj && urlObj.id) {
            const { data: posts } = await getUsersPostsByUserId(urlObj.id);
            if (posts) {
                setAllPosts(posts);
            }
        }
    }

    useEffect(() => {
        getUsersPosts();
    }, [])

    return (
        <>
            <div style={{ background: 'yellow', padding: "10px 15px 10px 15px", textAlign: 'left' }}>
                <h3>All User's Posts:</h3>
                <ul>
                    {allPosts && allPosts.map(post => {
                        return (<li key={post.id}>{post.title}</li>)
                    })}
                </ul>
            </div>
        </>
    )
}

export default Routin_SPA_HW_Posts