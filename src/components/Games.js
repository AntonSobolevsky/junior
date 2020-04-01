import React from "react";

import GameCard from "./GameCard";
import { connect } from "react-redux";

import { fetchGames } from "../actions";

import "./Games.scss";

class Games extends React.Component {
  state = {
    loading: false
  };

  componentDidMount() {
    const { onLoad } = this.props;
    this.setState({ loading: true });
    onLoad();
  }

  render() {
    if (this.props.loading) {
      return <span>Loading...</span>;
    }

    const { games } = this.props;

    const view = games.map(game => {
      return <GameCard game={game} key={game.id} />;
    });

    return <div className="games">{view}</div>;
  }
}

const mapStateToProps = state => {
  const { offset = 0, games, loading } = state;

  return {
    games: games.slice(offset, offset + 10),
    loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => {
      dispatch(fetchGames());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Games);
