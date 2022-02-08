const withTM = require('next-transpile-modules')([
  'core',
  'ui',
  'addresses',
  'bank-drafts',
  'clients',
  'companies',
  'employees',
  'parcels',
  'routes',
  'tickets',
  'transport-sheets',
  'vehicles',
])

module.exports = withTM({
  reactStrictMode: true,
})
