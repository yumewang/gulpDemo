'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chat from '../components/Chat';
import * as actions from '../actions/index';

class ChatContainer extends Component {
  componentWillMount() {
    const { user, failure } = this.props;
  }

  render() {
    return (
      <Chat {...this.props} />
    )
  }
}

ChatContainer.propTypes = {
  messages: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  failure: React.PropTypes.string
}

function mapStateToProps(state) {
  console.log(state);
  return {
    messages: state.messages,
    user: state.user.user,
    failure: state.rootReducer.failure
  }
}

export default connect(mapStateToProps)(ChatContainer)
