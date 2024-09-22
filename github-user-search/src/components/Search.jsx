import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (username.trim()) {
      setLoading(true);
      setError('');
      setUserData(null);
      try {
        const data = await fetchUserData(username);
        setUserData(data);  // Successfully fetched user data
      } catch (err) {
        setError("Looks like we can't find the user.");  // The exact error message
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search GitHub Users"
          value={username}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>} {/* Display loading message */}

      {error && <p>{error}</p>} {/* Display error message "Looks like we can't find the user" */}

      {userData && (  // Display user data if available
        <div>
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <h2>{userData.login}</h2>
          <p>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit GitHub Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
