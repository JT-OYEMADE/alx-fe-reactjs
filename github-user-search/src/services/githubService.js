import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q=';

export const fetchUserData = async (username, location, minRepos) => {
  try {
    // Build the query based on the parameters provided
    let query = '';

    if (username) {
      query += `user:${username}`;
    }

    if (location) {
      query += ` location:${location}`;
    }

    if (minRepos) {
      query += ` repos:>${minRepos}`;
    }

    // Make the API request using Axios
    const response = await axios.get(`${BASE_URL}${query}`);

    // Return the list of users
    return response.data.items;
  } catch (error) {
    // Handle any errors
    throw error;
  }
};
