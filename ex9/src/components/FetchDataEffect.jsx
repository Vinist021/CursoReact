import React, { useEffect, useState } from 'react';

const FetchDataEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      if (data && data.length) setData(data);
    }

    getData();
  }, []);

  const groupedByUser = data.reduce((acc, post) => {
    if (!acc[post.userId]) {
      acc[post.userId] = [];
    }
    acc[post.userId].push(post);
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(groupedByUser).map(([userId, posts]) => (
        <section key={userId} style={{ marginBottom: '2rem' }}>
          <h2>Usuário {userId}</h2>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <strong>{post.title}</strong>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default FetchDataEffect;
