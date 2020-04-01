import React from "react";
import { connect } from "react-redux";

import "./Search.scss";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import { fetchGames } from "../actions";

const SearchButton = withStyles({
  root: {
    marginLeft: "auto"
  }
})(Button);

const SeacrhField = withStyles({
  root: {
    width: "100%",
    marginRight: "20px"
  }
})(TextField);

class Search extends React.Component {
  state = {
    value: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    const { onSearch } = this.props;
    const { value } = this.state;

    onSearch(value);
  };

  handleChange = ({ target }) => {
    this.setState({ value: target.value });
  };

  render() {
    const { value } = this.state;

    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <SeacrhField
          value={value}
          onChange={this.handleChange}
          label="Search Game"
        />
        <SearchButton
          variant="contained"
          color="primary"
          onClick={this.handleSubmit}
        >
          Search
        </SearchButton>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearch: search => {
      dispatch(fetchGames(search));
    }
  };
};

export default connect(null, mapDispatchToProps)(Search);
