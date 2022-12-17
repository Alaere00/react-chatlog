import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const entryData = props.entries.map(entry => {
    console.log(entry.sender)
    console.log(entry.body)
    return (<p key={entry.id}>
      <ChatEntry sender={entry.sender} body={entry.body} timeStamp={entry.timeStamp}></ChatEntry>
      </p>
    );
  });
  return (
      <section>
        <h2>ChatLog</h2>
        {entryData}
      </section>
    );
};

export default ChatLog; 

ChatLog.protoTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired
}