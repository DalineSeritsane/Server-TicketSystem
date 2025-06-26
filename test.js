// test-require.js
const path = require('path');
const userPath = path.resolve(__dirname, './models/user.js');
console.log('Resolved path:', userPath);

try {
  const User = require('./models/user');
  console.log('User model loaded:', typeof User);
} catch (err) {
  console.error('Failed to load user model:', err.message);
}
