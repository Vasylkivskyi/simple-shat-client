import React from 'react';
import './message.scss';
import { Comment } from 'semantic-ui-react';

const Message = ({
  author, text, time, image,
}) => (
  <Comment>
    <Comment.Avatar src={image} />
    <Comment.Content>
      <Comment.Author as="a">{author}</Comment.Author>
      <Comment.Metadata>{time}</Comment.Metadata>
      <Comment.Text>{text}</Comment.Text>
    </Comment.Content>
  </Comment>
);

export default Message;
