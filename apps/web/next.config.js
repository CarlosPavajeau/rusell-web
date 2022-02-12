// @ts-check
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

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withTM({
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  webpack(config, { dev, ...other }) {
    if (!dev) {
      // https://formatjs.io/docs/guides/advanced-usage#react-intl-without-parser-40-smaller
      config.resolve.alias['@formatjs/icu-messageformat-parser'] =
        '@formatjs/icu-messageformat-parser/no-parser'
    }
    return config
  },
})
