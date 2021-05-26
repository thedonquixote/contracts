import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import LoggedinMenu from 'modules/Menu/LoggedinMenu';

const LayoutDefault = (props) => (
  <Fragment>
    <LoggedinMenu />
    <Route {...props} />
  </Fragment>
);

export default LayoutDefault;