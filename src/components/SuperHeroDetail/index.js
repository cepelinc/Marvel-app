import React from 'react';
import PropTypes from 'prop-types';
import style from './style.styled';
const Container = style.container;
const Title = style.title;
const DetailContainer = style.detailContainer;
const Item = style.item;


const SuperHeroDetail = ({name, thumbnail, description, urls}) => (
  <Container>
    <Title>{name}</Title>
    <DetailContainer>
      <Item><img src={`${thumbnail.path}.${thumbnail.extension}`}/></Item>
      <Item><h3>Biography</h3> {description || 'no biography available'}</Item>
      <Item>
        <h3>SuperLinks</h3>
        {urls.length ? <ul>{urls.map(link => <li key={`${link.type}`}><a href={link.url} target="_blank" rel="noopener noreferrer" >{link.type}</a></li>)}</ul> : 'no links available'}
      </Item>
    </DetailContainer>
  </Container>
)

SuperHeroDetail.propTypes = {
  name: PropTypes.string,
  thumbnail: PropTypes.object,
  description: PropTypes.string,
  urls: PropTypes.array
};

export default SuperHeroDetail
