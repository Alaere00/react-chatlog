import React from 'react';
// import PropTypes from 'prop-types';


const ChatLog = (props) => {
  const entryData = props.entries.map(entry =>{
  return (
    <section>
      <p key={entry.id}>
        {entry.sender}
        {entry.body}
        {entry.timeStamp}
      </p>
    </section>
  )
  });
  return entryData
};

export default ChatLog; 

// ChatLog.protoTypes = {

// }