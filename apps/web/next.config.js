const withTM = require('next-transpile-modules')([
  'core',
  'ui',
  'addresses',
  'clients',
  'companies',
])

module.exports = withTM({
  reactStrictMode: true,
})
