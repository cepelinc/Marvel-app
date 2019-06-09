import React from 'react'
import Jest from 'jest';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import HeroesListItem from '@components/HeroesListItem'

describe('HeroesList', () => {
  const mockData = {
    name: 'Spiderman', id: 1, comics: 5, series: 5, events: 5, stories: 5, picture: {path: 'path', extension: 'jpg'}, offset: 1, handleHero : Jest.func,
  }
  it('matches snapshot', () => {
    const Component = renderer.create(
      <BrowserRouter>
        <HeroesListItem {...mockData} />
      </BrowserRouter>)
      .toJSON()

    expect(Component).toMatchSnapshot()
  })
})
