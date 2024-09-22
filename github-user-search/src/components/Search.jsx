import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [repos, setRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch user data based on multiple parameters
  const fetchUserData = async () => {
    try {
      const query = `q=${username ? `user:${username}` : ''}${location ? ` location:${location}` : ''}${repos ? ` repos:>${repos}` : ''}`;
      const response = await axios.get(`https://api.github.com/search/users?${query}`);
      return response.data.items;  // Return list of users
    } catch (error) {
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUserData([]);

    try {
      const data = await fetchUserData();
      setUserData(data);
    } catch (err) {
      setError('Looks like we cant find any users.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {userData.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {userData.map((user) => (
            <div key={user.id} className="border p-4 rounded">
              <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full" />
              <h2 className="text-xl">{user.login}</h2>
              {user.location && <p>Location: {user.location}</p>}
              <p>Repositories: {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
