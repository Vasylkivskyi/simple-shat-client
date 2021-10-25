import React from 'react'

const Join = ({ onJoin }) => {
  const [room, setRoom] = React.useState('');
  const [name, setName] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || ! room) {
      alert('Provide data')
      return;
    }
    onJoin(room, name);
  }

  return (
    <div className="join">
      <form onSubmit={onSubmit}>
        <h3>Welcome</h3>
        <input type="text" onChange={(e) => setRoom(e.target.value)} value={room} placeholder="room id" />
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="name"/>
        <button type="submit">Enter</button>
      </form>
    </div>
  )
}

export default Join
