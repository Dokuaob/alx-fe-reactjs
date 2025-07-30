import axios from 'axios';

// Get your GitHub API key from .env
const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

// Base GitHub API URL
const GITHUB_API_URL = 'https://api.github.com/users/';

// Function to fetch user data
export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}${username}`, {
      headers: {
        Authorization: apiKey ? `token ${apiKey}` : undefined,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    throw error;
  }
};
