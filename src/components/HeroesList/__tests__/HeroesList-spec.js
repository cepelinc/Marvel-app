import React from 'react'
import Jest from 'jest';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import HeroesList from '@components/HeroesList'

describe('HeroesList', () => {
  const mockData = {
    superHeroes : [{name: 'Spiderman', id: 1, comics: {available: 5}, series: {available: 5}, events: {available: 5}, stories: {available: 5}, thumbnail: {path: 'path', extension: 'jpg'}}],
    handleHero : Jest.func,
    handlePage : Jest.func,
    offset : 1
  }
  it('matches snapshot', () => {
    const Component = renderer.create(
      <BrowserRouter>
        <HeroesList {...mockData} />
      </BrowserRouter>)
      .toJSON()

    expect(Component).toMatchSnapshot()
  })
})
