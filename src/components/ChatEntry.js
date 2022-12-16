import React from 'react';
import './ChatEntry.css';
// import PropTypes from 'prop-types';


const ChatEntry = (props) => {
  const getByTextContent = (text) => {
    // Passing function to `getByText`
    return screen.getByText((content, element) => {
        const hasText = element => element.textContent === text
        const elementHasText = hasText(element)
        const childrenDontHaveText = Array.from(element?.children || []).every(child => !hasText(child))
        return elementHasText && childrenDontHaveText
  })
}
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>
          {props.body}
        </p>
        <p className="entry-time">{props.timeStamp}</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

// ChatEntry.propTypes = {
//   sender: PropTypes.string,
//   body: PropTypes.string,
//   timeStamp: PropTypes.string
// };

export default ChatEntry;
