import React, {useState} from 'react';
import './App.css';
import ChatLog from './components/ChatLog'
import messages from './data/messages.json';


const App = () => {
  const [likedMessage, setLiked] = useState(messages);

  const cntTotalLikes = (likedMessage) => {
    return likedMessage.reduce((total, message) =>{
      if (message.liked){
        total += 1;
    }
    return total;
    }, 0 )
  }
  
  const toggleHeart = (id) => {
    const liked = likedMessage.map(message => {
      if (id === message.id){
        return {...message, liked: !message.liked}
      } else {
        return message
      }
    });
    setLiked(liked)
};

  const totalLikes = cntTotalLikes(likedMessage);

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h2>{totalLikes} {`❤️s`}</h2>
      </header>
      <main>
        <ChatLog 
        entries={messages}
        onToggleHeart={toggleHeart}/>
      </main>
    </div>
  );
};

export default App;
