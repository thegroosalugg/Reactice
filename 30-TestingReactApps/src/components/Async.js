import { useEffect, useState } from 'react';

const Async = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchStuff() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const resData = await response.json();
      setPosts(resData);
    }

    // non async oldschool version
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setPosts(data);
    //   });

    fetchStuff();
  }, []);

  return (
    <div className='center'>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Async;
