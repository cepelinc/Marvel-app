import React from 'react';
import PropTypes from 'prop-types';
import style from './style.styled';
const Container = style.container;

const PrevNext = ({handlePage, offset}) => (
  <Container>
    <div>{offset ? <span onClick={()=> handlePage('prev')}>&#60; prev page</span> : null}</div>
    <div><span onClick={()=> handlePage('next')}>next page &#62;</span></div>
  </Container>
)

PrevNext.propTypes = {
  handlePage: PropTypes.func,
  offset: PropTypes.number,
};
export default PrevNext
