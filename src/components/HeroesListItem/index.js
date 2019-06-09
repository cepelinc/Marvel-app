import React from 'react';
import PropTypes from 'prop-types';
import style from './style.styled';
const Container = style.container;
const Link = style.link;

const buildAnswer = (data) => data ? 'yeah' : 'nope'

const HeroesListItem = ({name, comics, series, events, stories, picture, id, handleHero}) => (
  <Container>
    <div>
      <div>
        {picture ? <img src={`${picture.path}.${picture.extension}`}/> : 'no picture available'}
        <span>{name}</span>
      </div>
      <div>
        <span>Comics</span>
        <p>{buildAnswer(comics)}</p>
      </div>
      <div>
        <span>Series</span>
        <p>{buildAnswer(series)}</p>
      </div>
      <div>
        <span>Events</span>
        <p>{buildAnswer(events)}</p>
      </div>
      <div>
        <span>Stories</span>
        <p>{buildAnswer(stories)}</p>
      </div>
    </div>
    <Link onClick={() => handleHero(id)} to={`/heroes/${id}`}>Find out more about {name} &gt; &gt; &gt;</Link>
  </Container>
)

HeroesListItem.propTypes = {
  name: PropTypes.string,
  comics: PropTypes.number,
  series: PropTypes.number,
  events: PropTypes.number,
  stories: PropTypes.number,
  picture: PropTypes.object,
  id: PropTypes.number,
  handleHero: PropTypes.func

};


export default HeroesListItem
