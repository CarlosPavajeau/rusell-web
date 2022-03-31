// @ts-check
const withTM = require('next-transpile-modules')([
  '@rusell/shared',
  '@rusell/addresses',
  '@rusell/bank-drafts',
  '@rusell/clients',
  '@rusell/companies',
  '@rusell/employees',
  '@rusell/parcels',
  '@rusell/routes',
  '@rusell/tickets',
  '@rusell/transport-sheets',
  '@rusell/vehicles',
])

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withTM({
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
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
