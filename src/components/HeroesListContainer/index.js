import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeroesList from '@components/HeroesList'
import SuperHeroDetail from '@components/SuperHeroDetail'
import NoData from '@components/NoData';
import { getSuperHeroes, getHero } from '@actions/superHeroesActions';

const mapStateToProps = (state) => ({
  superHeroes: state.superHeroes.superHeroes,
  hero: state.superHeroes.hero,
  totalItems: state.superHeroes.totalItems,
});

class SuperHeroes extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    match: PropTypes.object,
    hero: PropTypes.object,
  }

  state = {
    limit: 4,
    offset: 0,
  }

  componentDidMount(){
    const { dispatch } = this.props;
    const { id } = this.props.match.params;
    const { limit, offset } = this.state;
    dispatch(getSuperHeroes({limit, offset}))
    if (id) dispatch(getHero(id))
  }
  handleHero = (id) => {
    const { dispatch } = this.props;
    dispatch(getHero(id))
  }

  handlePage = (moveTo) => {
    const { dispatch } = this.props;
    let { offset, limit, page } = this.state;
    if (moveTo === 'next') {
      offset = offset + limit;
    }
    else {
      offset = offset - limit;
    }
    this.setState(() => ({
      offset
    }));
    dispatch(dispatch(getSuperHeroes({limit, offset})))
  }

  render() {
    return (
      <Fragment>
        <HeroesList handleHero={this.handleHero} handlePage={this.handlePage} {...this.props} {...this.state} />
        {this.props.hero && <SuperHeroDetail {...this.props.hero} />}
        {!this.props.hero &&  <NoData />}
      </Fragment>

    )
  }
}




export default connect(mapStateToProps)(SuperHeroes)
