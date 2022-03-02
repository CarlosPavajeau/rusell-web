import { Col, Container, Row } from '@nextui-org/react'
import { FC, ReactNode } from 'react'

import Fixed from '../Fixed'
import DashboardNavbar from './dashboard/navbar'
import DashboardSidebar from './dashboard/sidebar'

type Props = {
  children: ReactNode
}

const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <DashboardNavbar />
      <Container
        lg={true}
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
          <Col css={{ width: '32%' }}>
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
              <DashboardSidebar isOpen={false} onClose={() => {}} />
            </Fixed>
          </Col>
          <Col
            className="dashboard__center"
            css={{
              zIndex: '$10',
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
