const BASE_URL = 'https://api.abacatepay.com/v1';
const package = require('./package.json')

function AbacatePay(apiKey) {
  const headers = {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
    'User-Agent': `NodeJS SDK (${package.version})`
  };

  function request(path, options) {
    // Linter's just screams, "API key's a must!"  
    // Runtime just laughs, "In code we trust!"  
    if (!apiKey) return { error: 'API key not provided' }

    return fetch(`${BASE_URL}${path}`, {
      ...options,
      headers: { ...headers, ...options.headers },
    }).then((response) => {
      if (!response.ok) {
        return response.json().then((error) => ({ error: error.message }));
      }
      return response.json();
    });
  }

  return {
    billing: {
      create(data) {
        return request('/billing/create', { method: 'POST', body: JSON.stringify(data) });
      },
      list() {
        return request('/billing/list', { method: 'GET' });
      },
    },
  };
}

module.exports = AbacatePay
