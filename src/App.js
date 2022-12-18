import React, {useState} from 'react';
import './App.css';
import ChatLog from './components/Chatlog'
import chatMessages from './data/messages.json';


const App = () => {
  const [likeCount, setLikeCount] = useState(0)

//   const changeHeart = (id) => {
//     updateLikes(isLiked => isLiked.map(chat => {
//       if (chat.id === id){
//         return {...chat, liked: !chat.liked}
//       } else {
//         return chat
//       }
//     }));
// };

const [isLiked, updateLiked] = useState(false);


  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h2>{likeCount} {`❤️`}</h2>
      </header>
      <main>
        <ChatLog
        entries={chatMessages}>
        </ChatLog>
      </main>
    </div>
  );
};
export default App;
