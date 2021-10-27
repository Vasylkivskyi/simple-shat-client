/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import './join.scss';

const Join = ({ onJoin }) => {
  const [room, setRoom] = React.useState('');
  const [name, setName] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !room) {
      alert('Provide data');
      return;
    }
    onJoin(room, name);
  };

  return (
    <div className="join">
      <Form onSubmit={onSubmit}>
        <h3>Welcome</h3>
        <Form.Field>
          <label>Room name</label>
          <input placeholder="Room name" onChange={(e) => setRoom(e.target.value)} value={room} />
        </Form.Field>
        <Form.Field>
          <label>User Name</label>
          <input placeholder="User Name" onChange={(e) => setName(e.target.value)} value={name} />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Join;
