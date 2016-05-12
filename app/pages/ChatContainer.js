'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';
import Chat from '../components/Chat';
import * as actions from '../actions/index';

const socket = io('http://localhost:3002');
class ChatContainer extends Component {
  componentWillMount() {
    const { user, failure } = this.props;
  }

  render() {
    return (
      <Chat {...this.props} socket={socket} />
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
  return {
    messages: state.messages,
    user: state.user.user,
    failure: state.rootReducer.failure
  }
}

export default connect(mapStateToProps)(ChatContainer)
