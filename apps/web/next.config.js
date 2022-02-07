const withTM = require('next-transpile-modules')([
  'core',
  'ui',
  'addresses',
  'companies',
])

module.exports = withTM({
  reactStrictMode: true,
})
