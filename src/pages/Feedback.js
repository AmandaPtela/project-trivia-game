import React from 'react';
import { PropTypes } from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../components/Header';
import './Game.css';

class Feedback extends React.Component {
  constructor() {
    super();

    this.state = {
      redirect: false,
    };
  }

  handleClick = () => {
    this.setState({ redirect: true });
  }

  render() {
    const { assertions } = this.props;
    const { redirect } = this.state;
    const spots = 3;
    return (
      <>
        <Header />
        <div className="feedback-area">
          <div data-testid="feedback-text">
            {assertions < spots
              ? <p className="feedback">Could be better...</p>
              : <p className="feedback">Well Done!</p>}
          </div>
          <div className="feedback-btns">
            <button
              type="button"
              className="btn-play-again"
              data-testid="btn-play-again"
              onClick={ () => this.handleClick() }
            >
              Play Again
            </button>
            { redirect && <Redirect to="/" /> }
            <Link to="ranking">
              <button
                type="button"
                data-testid="btn-ranking"
                className="btn-ranking"
              >
                Ranking
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
});

Feedback.propTypes = {
  assertions: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Feedback);
