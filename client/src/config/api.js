/**
 * API endpoints and configuration
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.nothing-bot.com';

export const API_ENDPOINTS = {
  // Stats
  stats: `${API_BASE_URL}/stats`,
  health: `${API_BASE_URL}/health`,
  
  // Bot info
  bot: `${API_BASE_URL}/bot`,
  botStats: `${API_BASE_URL}/bot/stats`,
  
  // Contact
  contact: `${API_BASE_URL}/contact/submit`,
  subscribe: `${API_BASE_URL}/newsletter/subscribe`,
};

/**
 * HTTP client helper
 */
export async function fetchAPI(endpoint, options = {}) {
  try {
    const response = await fetch(endpoint, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API fetch error:', error);
    throw error;
  }
}

/**
 * Common API methods
 */
export const api = {
  get: (url, options) => fetchAPI(url, { method: 'GET', ...options }),
  post: (url, data, options) =>
    fetchAPI(url, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    }),
  put: (url, data, options) =>
    fetchAPI(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options,
    }),
  delete: (url, options) => fetchAPI(url, { method: 'DELETE', ...options }),
};
