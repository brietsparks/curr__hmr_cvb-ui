import React, { Component } from 'react';
// import { connect } from 'react-redux';

import Viewer from '../../components/Viewer';
import { withLayout } from '../../hocs/Layout';

import withState from '../../hocs/StatefulPage';

export class ViewPage extends Component {
  render() {
    return (
      <Viewer
        userIsAuthenticated={this.props.userIsAuthenticated}
        dispatch={this.props.dispatch}
      />
    );
  }
}

export const ViewPageWithLayout = withLayout(ViewPage);

// export const ViewPageWithLayoutAndState = connect(state => state)(ViewPageWithLayout);
export const ViewPageWithLayoutAndState = withState(ViewPageWithLayout, state => state);

export default ViewPageWithLayoutAndState;