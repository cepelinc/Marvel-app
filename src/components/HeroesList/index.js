import React from 'react';
import PropTypes from 'prop-types';
import style from './style.styled';
import HeroesListItem from '@components/HeroesListItem';
import PrevNext from '@components/PrevNext';
const Container = style.container;

const HeroesList = ({superHeroes, handleHero, handlePage, offset }) => (
  <Container>
    <h1>MARVEL SUPERHEROES</h1>
    <PrevNext handlePage={handlePage} offset={offset} />
    {superHeroes.map(hero => (
      < HeroesListItem
        name={hero.name}
        key={`id_${hero.id}`}
        id={hero.id}
        comics={hero.comics.available}
        series={hero.series.available}
        stories={hero.stories.available}
        events={hero.events.available}
        picture={hero.thumbnail}
        handleHero={(id) => handleHero(id)}
        offset={offset}
      />
    ))}
  </Container>
)

HeroesList.propTypes = {
  superHeroes: PropTypes.array,
  handleHero: PropTypes.func,
  handlePage: PropTypes.func,
  offset: PropTypes.number
};

export default HeroesList
