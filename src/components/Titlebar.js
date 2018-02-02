import React from 'react';
import '../css/titlebar.css';

class Titlebar extends React.Component {
  render() {
    return (
      <div className="title">
        {this.props.title}
      </div>
    );
  }
}

export default Titlebar;
