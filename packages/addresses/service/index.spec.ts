import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

import { faker } from '@faker-js/faker'
import { http } from '@rusell/core/http'

import { AddressesService } from './index'

describe('addresses service', () => {
  beforeEach(() => {
    jest.spyOn(http, 'get').mockImplementation((url: string) => {
      const matched = url.match(/\/addresses\/(\w+)/)
      if (matched !== null) {
        return Promise.resolve({
          data: {
            id: matched[1],
            country: faker.address.country(),
            state: faker.address.state(),
            city: faker.address.city(),
            neighborhood: faker.address.city(),
            streetName: faker.address.streetName(),
            intersection: faker.address.streetName(),
            streetNumber: faker.address.streetAddress(),
            comments: faker.lorem.sentence(),
          },
        })
      }
      return Promise.resolve({
        data: [
          {
            id: faker.random.alpha(),
            country: faker.address.country(),
            state: faker.address.state(),
            city: faker.address.city(),
            neighborhood: faker.address.city(),
            streetName: faker.address.streetName(),
            intersection: faker.address.streetName(),
            streetNumber: faker.address.streetAddress(),
            comments: faker.lorem.sentence(),
          },
        ],
      })
    })

    jest.spyOn(http, 'post').mockImplementation(() => Promise.resolve({}))
  })

  it('should be save an address', async () => {
    await AddressesService.save({
      country: faker.address.country(),
      state: faker.address.state(),
      city: faker.address.city(),
      neighborhood: faker.address.city(),
      streetName: faker.address.streetName(),
      intersection: faker.address.streetName(),
      streetNumber: faker.address.streetAddress(),
      comments: faker.lorem.sentence(),
    })

    expect(http.post).toHaveBeenCalled()
  })

  it('should be fetch all addresses', async () => {
    const response = await AddressesService.fetchAll()

    expect(response.length).toBe(1)
  })

  it('should be fetch an address', async () => {
    const id = faker.random.alpha()
    const response = await AddressesService.fetchById(id)

    expect(response.id).toBe(id)
  })
})
