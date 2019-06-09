import React from 'react';
import PropTypes from 'prop-types';
// import throttle from 'lodash/throttle';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import style from './style.styled';
const MainContainer = style.mainContainer;

import routes from '@routes';
import history from '../../history';
import store from '../../store';
const Root = () => (
  <Provider store={store}>
    <MainContainer>
      <Router history={history}>{routes}</Router>
    </MainContainer>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object,
  client: PropTypes.object,
};

export default hot(Root);
