'use strict';

import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

export default class MessageList extends Component {
  render() {
    const { message } = this.props;
    const messageItemClass = classNames({
      'list-group-item': true,
      'text-left': message.type === '1',
      'text-right': message.type === '2'
    });
    return (
      <li key={`message_${message.id}`} className={messageItemClass} >
        <img src={`../../images/book${message.type === '1' ? '5' : '1'}.jpg`} className='avatar' />
        <div>
          <b>{message.id}-{message.username} - {message.time}</b>
          <p>{message.text}</p>
        </div>
      </li>
    )
  }
}

MessageList.propTypes = {
  message: PropTypes.object.isRequired
}