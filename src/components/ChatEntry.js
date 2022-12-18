import React, {useState} from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';


const ChatEntry = (props) => {
  const date1 = new Date(props.timeStamp) 
  const year = 2022 - date1.getFullYear()

  const [isLiked, updateLiked] = useState(true);

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>
          {props.body}
        </p>
        <p className="entry-time">{`${year} years ago`}
        </p>
        <button onClick={() => updateLiked(!isLiked)}
        >{isLiked ? '🤍' : '❤️'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
};

export default ChatEntry;
