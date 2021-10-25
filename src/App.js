import React from 'react';
import socket from './socket';
import Join from './components/Join';


const App = () => {
  const [isJoined, setJoined] = React.useState(false);
  const [state, setState] = React.useState({
    users: [],
    messages: [],
    room: '',
  })

  React.useEffect(() => {
    socket.on('HAND_SHAKE', () => {
      console.log('hello')
    });
    socket.on('SET_USERS', ({ room, users }) => {
      setJoined(true);
      setState((prev) => ({
        ...prev,
        users: users,
        room,
      }))
    })
  }, []);

  const onJoin = (room, name) => {
    socket.emit('SET_USERS', { room, name });
  }

  console.log(state)

  return (
    <div className="app">
      {!isJoined ? <Join onJoin={onJoin} /> : null}
    </div>
  );
}

export default App;
