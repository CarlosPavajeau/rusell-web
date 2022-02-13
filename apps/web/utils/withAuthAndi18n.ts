import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import loadI18nMessages from 'utils/i18n/loadIntlMessages'

const withAuthAndi18n = withPageAuthRequired({
  getServerSideProps: async context => {
    return {
      props: {
        intlMessages: await loadI18nMessages({
          locale: context.locale,
          defaultLocale: context.defaultLocale,
        }),
      },
    }
  },
})

export default withAuthAndi18n
