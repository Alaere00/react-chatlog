import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const getEntryDataJSX = (entries) => {
    return entries.map((entry) => {
      return (
      <ChatEntry
      key={entry.id}
      id={entry.id}
      sender={entry.sender} 
      body={entry.body} 
      timeStamp={entry.timeStamp}
      liked={entry.liked}
      onToggleHeart={props.onToggleHeart}
      />
    );
  });
}
  
  return <ul className='chat-entry'>{getEntryDataJSX(props.entries)}</ul>
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    sender: PropTypes.string,
    body: PropTypes.string,
    timeStamp: PropTypes.string,
    liked: PropTypes.bool,
})),
  onToggleHeart: PropTypes.func,

}

export default ChatLog; 