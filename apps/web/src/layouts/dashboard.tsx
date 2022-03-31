import Fixed from '@components/fixed'
import DashboardNavbar from '@layouts/dashboard.navbar'
import { Col, Container, Row } from '@nextui-org/react'
import { FC, PropsWithChildren } from 'react'

const DashboardLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <DashboardNavbar />
      <Container
        lg
        as="main"
        className="dashboard__container"
        display="flex"
        css={{ position: 'relative' }}
      >
        <Row
          className="dashboard__content"
          gap={0}
          css={{
            '@lg': {
              pt: '1rem',
            },
          }}
        >
          <Col
            css={{
              width: '32%',
              display: 'none',
              '@md': {
                display: 'block',
              },
            }}
          >
            <Fixed
              offset={92}
              className="docs__left-sidebar"
              css={{
                maxHeight: 'calc(100vh - 4rem)',
                overflow: 'auto',
                display: 'none',
                zIndex: '$2',
                pb: '$28',
                '&::-webkit-scrollbar': {
                  width: '0px',
                },
                '@md': {
                  display: 'block',
                },
              }}
            >
              <div>Sidebar</div>
            </Fixed>
          </Col>
          <Col
            className="dashboard__center"
            css={{
              zIndex: '$10',
              maxWidth: '100%',
              overflow: 'auto',
              '@xsMax': {
                p: 0,
              },
            }}
          >
            {children}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default DashboardLayout
