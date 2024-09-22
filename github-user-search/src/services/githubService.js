import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const searchUsers = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/users?q=${username}`, {
      headers: {
        Authorization: `token ${process.env.VITE_GITHUB_API_KEY}`,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
