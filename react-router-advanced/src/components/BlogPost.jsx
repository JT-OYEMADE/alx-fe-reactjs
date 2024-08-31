// src/components/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { postId } = useParams();
  return (
    <div>
      <h2>Blog Post #{postId}</h2>
      <p>This is the content of the blog post.</p>
    </div>
  );
};

export default BlogPost;
