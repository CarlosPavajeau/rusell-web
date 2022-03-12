import AccountAvatar from '@components/account-avatar'
import ThemeToggle from '@components/theme-toggle'
import { StyledNavContainer } from '@layouts/styles'
import { Col, Container, Row, Spacer, Text } from '@nextui-org/react'
import cn from 'classnames'

const DashboardNavbar = () => {
  return (
    <StyledNavContainer>
      <Container lg as="nav" display="flex" wrap="nowrap">
        <Col
          className="navbar__resources-container"
          css={{
            '@mdMax': {
              width: '100%',
            },
          }}
        >
          <Row
            justify="flex-end"
            align="center"
            css={{
              position: 'initial',
              '@mdMax': {
                jc: 'center',
              },
            }}
          >
            <Text
              color="$text"
              css={{ color: '$text' }}
              className={cn('navbar__link')}
            >
              Hello
            </Text>
          </Row>
        </Col>
        <Col className="navbar__search-container">
          <Row
            className="navbar__search-row"
            justify="flex-end"
            align="center"
            css={{
              position: 'initial',
              '@mdMax': {
                jc: 'center',
              },
            }}
          >
            <Row
              className="navbar__social-icons-container"
              justify="flex-end"
              align="center"
              gap={1}
              css={{
                width: 'initial',
                '@mdMax': {
                  d: 'none',
                },
              }}
            >
              <ThemeToggle
                className="navbar__social-icon"
                css={{
                  m: '0 6px',
                  '& svg': {
                    transition: '$default',
                  },
                  '&:hover': {
                    '& svg': {
                      opacity: 0.7,
                    },
                  },
                }}
              />

              <Spacer x={1} y={0} />

              <AccountAvatar />
            </Row>
          </Row>
        </Col>
      </Container>
    </StyledNavContainer>
  )
}

export default DashboardNavbar
