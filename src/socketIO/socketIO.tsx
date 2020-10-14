import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

const BACKEND = 'http://127.0.0.1:4000';
export function SocketIO(props: any) {
  const { newUser: username } = props;
  const [response, setResponse] = useState('');

  useEffect(() => {
    console.log('triggered');
    const socket = io(BACKEND);
    socket.emit('newUser', {username});
    socket.on('response newUser', (data:any) => {
      console.log(data);
      setResponse(data);
    })
  }, []);
  return (
    <div>
      <h1>Im socket</h1>
      <span>{response}</span>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  const { username } = state;
  return { newUser: username };
};
export default connect(mapStateToProps, null)(SocketIO);
