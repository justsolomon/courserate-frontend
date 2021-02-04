const withPWA = require('next-pwa');

module.exports = {
  trailingSlash: true,
};

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
});
