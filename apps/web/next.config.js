const withTM = require('next-transpile-modules')(['ui', 'companies', 'core'])

module.exports = withTM({
  reactStrictMode: true,
})
