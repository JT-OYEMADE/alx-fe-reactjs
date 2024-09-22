import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const fetchAdvancedUserData = async (username, location, minRepos) => {
  try {
    let query = '';

    // Constructing the search query based on provided parameters
    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>${minRepos} `;

    // Making the API request
    const response = await axios.get(`${BASE_URL}?q=${query.trim()}`);

    return response.data; // Return the user data
  } catch (error) {
    throw new Error('Error fetching users');
  }
};
