// screens/PostsDisplayScreen.js
import React, { useState } from 'react';
import PostList from '../components/PostList';
import CreatePost from '../components/CreatePost';

const PostsDisplayScreen = () => {
  const [posts, setPosts] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleCreatePost = newPost => {
    newPost.id = Date.now(); // Temporary ID generation
    setPosts([...posts, newPost]);
    setShowCreateForm(false);
  };

  const handleEditPost = id => {
    // Implement edit functionality as needed
    console.log(`Editing post with ID: ${id}`);
  };

  return (
    <div className="posts-display-screen">
      <h1>Posts</h1>
      <button onClick={() => setShowCreateForm(true)}>Create New Post</button>
      {showCreateForm && <CreatePost onCreate={handleCreatePost} />}
      <PostList posts={posts} onEdit={handleEditPost} />
    </div>
  );
};

export default PostsDisplayScreen;
