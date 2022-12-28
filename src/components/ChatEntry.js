import React, {useState} from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const {sender} = props

  const [likedPost, setLikedMessage] = useState(props.liked)

  const toggle = id => {
    props.onToggleHeart(id);
    setLikedMessage(!likedPost);
  }


  const buttonClass = likedPost ? '❤️' : '🤍';

  const postPos = sender === 'Vladimir' ? 'local' : 'remote';

  return (
    <div className={`chat-entry ${postPos}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className={`entry-bubble ${postPos}`}> 
        <p>
          {props.body}
        </p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}/>
        </p>
        <button 
        className="like"
        onClick={()=> toggle(props.id)}
        >{buttonClass}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.string,
  liked: PropTypes.bool,
  onToggleHeart: PropTypes.func,
};

export default ChatEntry;
