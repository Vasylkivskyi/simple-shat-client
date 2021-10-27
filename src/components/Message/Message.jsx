import React from 'react';
import './message.scss';
import { Comment } from 'semantic-ui-react';

const Message = ({
  userName, text, time, image,
}) => (
  <Comment>
    <Comment.Avatar src={image} />
    <Comment.Content>
      <Comment.Author as="a">{userName}</Comment.Author>
      <Comment.Metadata>
        <div>
          Today at
          {' '}
          {time}
        </div>
      </Comment.Metadata>
      <Comment.Text>{text}</Comment.Text>
    </Comment.Content>
  </Comment>
);

export default Message;
