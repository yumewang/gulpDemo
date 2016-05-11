'use strict';

import React, { Component, PropTypes } from 'react';
import MessageList from './MessageList';
import * as actions from '../../actions/index';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetedUser: 'GOODMan'
    }
  }
  componentDidUpdate() {
    const messageList = this.refs.messageList;
    messageList.scrollTop = messageList.scrollHeight;
  }
  createMessage(e) {
    if (e.nativeEvent.keyCode !== 13) return;

    let input = e.target;
    let text = input.value;

    // if the text is blank, do nothing
    if (text === '') return;
    const { user, dispatch } = this.props;
    let message = {
      id: randomInt(1, 1000),
      username: user.username,
      text: text,
      type: '1',
      time: '2016-08-01'
    }
    // dispatch(actions.createMessage(newMessage));
    dispatch(actions.addMessage(message));

    // TODO
    let receiveMessage = {
      id: randomInt(1, 1000),
      username: 'Default',
      text: 'I am a Rabit.',
      type: '2',
      time: '2016-08-02'
    }

    setTimeout(function(){ dispatch(actions.receiveMessage(receiveMessage)); }, 500);
    

    function randomInt (low, high) {
      return Math.floor(Math.random() * (high - low) + low);
    }
  }

  render (){
    const {messages, user, dispatch} = this.props;
    const username = this.props.user.username;
    return (
      <div className='chat-container'>
        <ul className='message-list' ref='messageList' style={{height:'400px', wordWrap: 'break-word', margin: '0', overflowY: 'auto', padding: '0', paddingBottom: '1em', flexGrow: '1', order: '1'}}>
          {messages.data.map(message =>
            <MessageList message={message}  />
          )}
        </ul>
        <div className='form-group'>
          <input type='text'
                 className='form-control' 
                 placeholder='Type your message' 
                 onKeyPress={this.createMessage.bind(this)} />
        </div>
        
      </div>
    )
  }
}

Chat.propTypes = {
  messages: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}