import React from 'react';
import './App.scss';
import ChatApp from './components/ChatApp/ChatApp';
import { Provider } from 'react-redux';
import store from './redux/rootStore';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ChatApp />
      </div>
    </Provider>
  );
}

export default App;
