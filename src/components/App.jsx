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
  });

  React.useEffect(() => {
    socket.on('HAND_SHAKE', () => {
      console.log('hello');
    });
    socket.on('SET_USERS', ({ room, users }) => {
      setJoined(true);
      setState((prev) => ({
        ...prev,
        users,
        room,
      }));
    });
  }, []);

  const onJoin = (room, name) => {
    socket.emit('SET_USERS', { room, name });
  };

  console.log({ isJoined });

  return (
    <div className="app">
      {!isJoined ? <Join onJoin={onJoin} /> : <Chat />}
    </div>
  );
};

export default App;
