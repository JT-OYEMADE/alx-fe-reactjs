import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const fetchAdvancedUserData = async (username, location, minRepos) => {
  try {
    let query = '';

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>${minRepos} `;

    const response = await axios.get(`${BASE_URL}?q=${query.trim()}`);
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};
