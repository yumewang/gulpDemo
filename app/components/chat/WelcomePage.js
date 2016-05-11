'use strict';

import React from 'react';
// import classNames from 'classnames';

const WelcomePage = React.createClass({
  propTypes: {
      username: React.PropTypes.string,
      _onName: React.PropTypes.func
  },
  render() {
    let view;
    const { username } = this.props;
    if ( username ) {
      view = <h1> Welcome { username } </h1>
    } else {
      view = <input onKeyPress={this.props._onName} placeholder="Please enter your Twitter username" />
    }
    return (
      <div>
        { view }
      </div>
    )
  }
});

export default WelcomePage