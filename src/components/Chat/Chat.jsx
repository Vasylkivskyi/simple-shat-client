import React from 'react';
import './chat.scss';
import { Comment } from 'semantic-ui-react';
import Message from '../Message/Message';

const fakeMessages = [
  {
    userName: 'Pavlo',
    text: 'Hello! How are you?',
    time: '10:10',
    image: 'https://react.semantic-ui.com/images/avatar/small/matt.jpg',
  },
  {
    userName: 'Taras',
    text: "I'm fine. How are you?",
    time: '10:10',
    image: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
  },
  {
    userName: 'Pavlo',
    text: "I'm too",
    time: '10:11',
    image: 'https://react.semantic-ui.com/images/avatar/small/matt.jpg',
  },
];

const Chat = () => (
  <div className="chat">
    <div className="left" />
    <div className="right">
      <div className="header" />
      <div className="messages-list">
        <Comment.Group>
          {/* eslint-disable-next-line react/no-array-index-key */}
          {fakeMessages.map((message, i) => (<Message {...message} key={i} />))}
        </Comment.Group>
      </div>
      <div className="editor" />
    </div>

  </div>
);

export default Chat;
