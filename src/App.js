import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/Chatlog';
import chatMessages from './data/messages.json';


const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry sender="blank" body="blank" timeStamp="blank"></ChatEntry>
        {/* <ChatLog></ChatLog> */}
      </main>
    </div>
  );
};
export default App;
