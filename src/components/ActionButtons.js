import React from 'react';
import '../css/actionbuttons.css';

class ActionButtons extends React.Component {
  render() {
    return (
      <div className="button-container">
        <button className="action-button">Create new version</button>
      </div>
    );
  }
}

export default ActionButtons;
