// screens/CreatePostScreen.js
import React from 'react';
import CreatePost from '../components/CreatePost';

const CreatePostScreen = ({ onCreate }) => {
  return (
    <div className="create-post-screen">
      <CreatePost onCreate={onCreate} />
    </div>
  );
};

export default CreatePostScreen;
