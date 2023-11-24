import React from 'react';
import './Post.css';

function Post({ id, body, title }) {
  return (
    <div className="post">
      <h4>{id}</h4>
      <h2> title: {title}</h2>
      <h3> body: {body}</h3>
    </div>
  );
}

export default Post;
