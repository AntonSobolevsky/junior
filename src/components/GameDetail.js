import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Typography, withStyles } from "@material-ui/core";

import { fetchGame } from "../actions";

const Title = withStyles({
  root: {
    fontSize: "24px",
    textAlign: "center",
    marginBottom: "25px"
  }
})(Typography);

class GameDetail extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    const { onLoad } = this.props;

    onLoad(id);
  }

  render() {
    const { game, loading } = this.props;

    if (loading) {
      return <span>Loading...</span>;
    }

    if (!game) {
      return null;
    }

    const {
      age_ratings = {},
      genres = [],
      name,
      total_rating,
      summary,
      url
    } = game;

    return (
      <>
        <Title component="h2">{name}</Title>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Summary</TableCell>
                <TableCell>Age Rating</TableCell>
                <TableCell>Genres</TableCell>
                <TableCell>Total Rating</TableCell>
                <TableCell>Url</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{summary}</TableCell>
                <TableCell>
                  {age_ratings.category} {age_ratings.rating}
                </TableCell>
                <TableCell>
                  {genres.map(genre => (
                    <div key={genre.id}>{genre.name}</div>
                  ))}
                </TableCell>
                <TableCell>{total_rating}</TableCell>
                <TableCell>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                  </a>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { game: state.game, loading: state.loading };
};
const mapDispatchToProps = dispatch => {
  return {
    onLoad: id => {
      dispatch(fetchGame(id));
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(GameDetail)
);
