import React, { useState } from 'react';
import { fetchAdvancedUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUserData([]);

    try {
      const data = await fetchAdvancedUserData(username, location, minRepos);
      setUserData(data.items);
    } catch (err) {
      setError("Looks like we can't find users based on the criteria.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSearch} className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Search GitHub Users</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Minimum Repositories</label>
          <input
            type="number"
            className="w-full p-2 border rounded-md"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="Enter minimum repositories"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {userData && userData.length > 0 && (
        <div className="mt-6">
          {userData.map((user) => (
            <div key={user.id} className="p-4 border-b">
              <h3 className="text-lg font-bold">{user.login}</h3>
              <p>Location: {user.location || "N/A"}</p>
              <p>Repositories: {user.public_repos || "N/A"}</p>
              <a href={user.html_url} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                Visit GitHub Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
