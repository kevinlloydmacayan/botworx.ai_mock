import React from 'react';
import logo from '../static/images/white.svg';
import '../css/navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        currentTab: this.props.currentTab
      }
    }

  isHighlighted = (tab, index) => {
    if (tab === index) {
      return 'item-selected'
    }
  }

  selectTab = (index) => {
    this.setState({ currentTab: index})
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div className="logo-container">
            <img className="logo" src={logo} alt="Logo"/>
        </div>
        <div className="navigation-container">
            {this.props.tabs.map((tab) => {
                return <div key={tab.id}
                className={"navigation-item " + this.isHighlighted(tab.id, this.state.currentTab)}
                onClick={() => this.selectTab(tab.id)}>{tab.name}</div>
            })}
        </div>
        <div className="user-icon-container">
          <img src={this.props.picture} className="profile-icon" alt="Icon"/>
        </div>
      </div>
    );
  }
}

Navbar.defaultProps = {
    currentTab: 1,
    tabs: [
      {
        id: 0,
        name: 'Analytics'
      },
      {
        id: 1,
        name: 'Manage Accounts'
      },
      {
        id: 2,
        name: 'Manage Users'
      }
    ]
};

export default Navbar;
