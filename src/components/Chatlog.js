import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const getEntryDataJSX = (entries) => {
    return entries.map((entry) => {
      return (
      <ChatEntry
      key={entry.id}
      sender={entry.sender} 
      body={entry.body} 
      timeStamp={entry.timeStamp}
      liked={entry.liked}
      />
    );
  });
}
  
  return <ul>{getEntryDataJSX(props.entries)}</ul>
};


export default ChatLog; 

// ChatLog.propTypes = {
//   sender: PropTypes.string,
//   body: PropTypes.string,
//   timeStamp: PropTypes.string,
//   liked: PropTypes.bool,
// }
  

ChatLog.propTypes = {
  isLiked: PropTypes.arrayOf(
    PropTypes.shape({
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.string.isRequired,
})),
}