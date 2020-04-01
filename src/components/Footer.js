import React from "react";
import { connect } from "react-redux";

import Pagination from "@material-ui/lab/Pagination";
import { withStyles } from "@material-ui/core";

import { changePage } from "../actions";

const GamesPagination = withStyles({
  root: {
    display: "flex",
    justifyContent: "center"
  }
})(Pagination);

const Footer = ({ count, loading, onChange }) => {
  if (loading) {
    return null;
  }

  const pageCount = Math.ceil(count / 10);

  const handleChange = (event, page) => {
    onChange(page);
  };

  if (pageCount > 1) {
    return (
      <GamesPagination
        count={pageCount}
        color="primary"
        onChange={handleChange}
      />
    );
  }

  return null;
};

const mapStateToProps = ({ count, loading }) => ({ count, loading });
const mapDispatchToProps = dispatch => {
  return {
    onChange: page => {
      dispatch(changePage(page));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
