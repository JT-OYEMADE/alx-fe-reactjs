import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

// Function to fetch posts from the API
const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const PostsComponent = () => {
  // Use React Query's useQuery hook to fetch data with additional options
  const { data, isLoading, isError, error, refetch } = useQuery('posts', fetchPosts, {
    cacheTime: 5 * 60 * 1000, // Cache data for 5 minutes
    staleTime: 1 * 60 * 1000, // Data is considered fresh for 1 minute
    refetchOnWindowFocus: false, // Disable refetching on window focus
    keepPreviousData: true, // Keep previous data while fetching new data
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>An error occurred: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
