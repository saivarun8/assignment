// components/Post.js
import React from 'react';

const Post = ({ post, onEdit }) => {
  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={() => onEdit(post.id)}>Edit</button>
    </div>
  );
};

export default Post;
