import React, {useState} from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';


const ChatEntry = (props) => {
  const date1 = new Date(props.timeStamp) 
  const year = 2022 - date1.getFullYear()

  const [likedPost, setLikedMessage] = useState(props.liked)

  const toggle = id => {
    props.onToggleHeart(id);
    setLikedMessage(!likedPost);
  }

  const buttonClass = likedPost ? '❤️' : '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>
          {props.body}
        </p>
        <p className="entry-time">{`${year} years ago`}
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
