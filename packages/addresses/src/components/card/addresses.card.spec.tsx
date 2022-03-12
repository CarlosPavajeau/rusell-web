import { faker } from '@faker-js/faker'
import { render, screen } from '@testing-library/react'

import { Address } from '../../models'
import AddressCard from './address.card'

describe('Address card', () => {
  it('should render address card', () => {
    const address: Address = {
      id: faker.random.alpha(),
      country: faker.address.country(),
      state: faker.address.state(),
      city: faker.address.city(),
      neighborhood: faker.address.city(),
      streetName: faker.address.streetName(),
      intersection: faker.address.streetName(),
      streetNumber: faker.address.streetAddress(),
      comments: faker.lorem.sentence(),
    }

    render(<AddressCard address={address} />)
    expect(screen.getByText(address.comments)).toBeInTheDocument()
  })
})
