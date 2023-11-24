import React, { useEffect, useState } from 'react';
import Post from './Post';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const API = 'https://jsonplaceholder.typicode.com/posts';

  /*   useEffect(() => {
    async function fetchedData() {
      try {
        const fetched = await fetch(API);
        const response = await fetched.json();
        setPosts(response);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    }
    fetchedData();
  }, []); */

  useEffect(() => {
    (async function () {
      try {
        const fetched = await fetch(API);
        const response = await fetched.json();
        setPosts(response);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    })();
  }, []);

  /* useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((posts) => setPosts(posts))
      .catch((e) => setError(e.message))
      .finally(() => setIsLoading(false));
  }, [posts]);
 */
  if (error) {
    return <h1>Error: {error}</h1>;
  } else {
    return (
      <div>
        <h1>Posts</h1>
        <hr />
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          posts.map((post) => <Post key={post.id} {...post} />)
        )}
      </div>
    );
  }
}

export default Posts;
