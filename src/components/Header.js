import React from 'react';
import { connect } from 'react-redux';

import { Typography, withStyles } from '@material-ui/core';

const Title = withStyles({
  root: {
    textAlign: 'center',
    fontSize: '24px'
  }
})(Typography);

function Header({title}) {
  return (
    <Title>{title}</Title>
  );
}

const mapStateToProps = state => ({title: state.title});

export default connect(mapStateToProps)(Header);
