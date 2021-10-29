import React from 'react';
import './chat.scss';
import { Comment, Message as SMessage } from 'semantic-ui-react';
import Message from '../Message/Message';
import Editor from '../Editor/Editor';

const Chat = ({
  text, onChange, send, messages, users, room,
}) => (
  <div className="chat">
    <div className="header">
      <h2>
        Room:
        {' '}
        <b>{room}</b>
      </h2>
    </div>
    <div className="left">
      <h4><b>Users:</b></h4>
      <div className="users-list">
        {users.map((user) => <SMessage visible key={user.id}>{user.name}</SMessage>)}
      </div>
    </div>
    <div className="right">
      <div className="messages-list">
        <Comment.Group>
          {messages.map((message) => (<Message {...message} key={message.id} />))}
        </Comment.Group>
      </div>
      <Editor text={text} onChange={onChange} send={send} />
    </div>
  </div>
);

export default Chat;
