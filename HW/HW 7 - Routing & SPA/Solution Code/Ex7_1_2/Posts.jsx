import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserItems } from './utils';

const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

const Posts = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const titles = await getUserItems(postsUrl, id);
      setPosts(titles);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h4>Posts:</h4>
      <ul>
        {posts.map((title, index) => {
          return <li key={index}>{title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Posts;
