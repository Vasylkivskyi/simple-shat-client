import React from 'react';
import socket from '../utils/socket';
import Join from './Join/Join';
import Chat from './Chat/Chat';

const App = () => {
  const [isJoined, setJoined] = React.useState(false);
  const [state, setState] = React.useState({
    users: [],
    messages: [],
    room: '',
    text: '',
    name: '',
  });

  React.useEffect(() => {
    socket.on('HAND_SHAKE', () => {
      console.log('hello');
    });
    socket.on('SET_USERS', ({ room, users }) => {
      setJoined(true);
      console.log({ room, users });
      setState((prev) => ({
        ...prev,
        users,
        room,
      }));
    });
    socket.on('SET_MESSAGES', (messages) => {
      setState((prev) => ({
        ...prev,
        messages,
      }));
    });
  }, []);

  const onJoin = (room, name) => {
    setState((prev) => ({
      ...prev,
      name,
    }));
    socket.emit('SET_USERS', { room, name });
  };

  const send = () => {
    const { room, text, name } = state;
    if (!text.length) return;
    socket.emit('SET_MESSAGES', { room, text, name });
    setState((prev) => ({
      ...prev,
      text: '',
    }));
  };

  const onChange = (text) => {
    setState((prev) => ({
      ...prev,
      text,
    }));
  };

  return (
    <div className="app">
      {!isJoined
        ? <Join onJoin={onJoin} />
        : <Chat {...state} onChange={onChange} send={send} />}
    </div>
  );
};

export default App;
