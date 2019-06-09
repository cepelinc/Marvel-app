import React from 'react'
import renderer from 'react-test-renderer';
import SuperHeroDetail from '@components/SuperHeroDetail'

describe('HeroesList', () => {
  const mockData = {
    mame: "Spiderman",
    thumbnail: {
      path: 'path',
      extension: 'jpg'
    },
    description: 'description',
    urls: [],
  };
  it('matches snapshot', () => {
    const Component = renderer.create(
      <SuperHeroDetail {...mockData} />)
      .toJSON()

    expect(Component).toMatchSnapshot()
  })
})
