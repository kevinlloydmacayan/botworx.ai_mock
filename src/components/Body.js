import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import Toggle from 'react-toggle';
import '../css/toggle.css';
import '../css/body.css';
import EditIcon from '../static/icons/edit.svg';
import CommentIcon from '../static/icons/automate-gray.svg';
import CopyIcon from '../static/icons/copy.svg';
import AddUsersIcon from '../static/icons/users-add.svg';
import TrashIcon from '../static/icons/trash.svg';


class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        versions: [{
        id: 0,
        version_name: 'Telangana Sports 1.0',
        status: false
        }, {
        id: 1,
        version_name: 'Telangana Sports Halloween',
        status: false
        }, {
        id: 2,
        version_name: 'Telangana Sports 2.0',
        status: false
        }, {
        id: 3,
        version_name: 'Telangana Sports 3.0',
        status: false
        }, {
        id: 4,
        version_name: 'Telangana Sports 4.0',
        status: false
        }, {
        id: 5,
        version_name: 'Telangana Sports 5.0',
        status: true
        }, {
        id: 6,
        version_name: 'Telangana Sports 6.0',
        status: false
        }]
    }
  }

  updateStatus = (id, status) => {
    const versions = [...this.state.versions];
    for(let i=0; i<=this.state.versions.length; i++){
        if(id === this.state.versions[i].id) {
            versions[i].status = status;
            this.setState({versions: versions});
            break;
        }
    }
  }

  statusFormatter = (cell, row) => {
  return (
    <div className="status-toggle">
        <div className="toggle-button">
            <Toggle icons={false} defaultChecked={cell} onChange={() => this.updateStatus(row.id, !cell)}/>
        </div>
        <div className={"toggle-label " + (cell ? "active-label" : "inactive-label") }>{cell ? "active" : "inactive"}</div>
    </div>
  );
}

  actionFormatter = () => {
  const icons = [
    {
      name: 'Edit',
      src: EditIcon
    },
    {
      name: 'JSON',
      src: 'text'
    },
    {
      name: 'Comment',
      src: CommentIcon
    },
    {
      name: 'Add Users',
      src: AddUsersIcon
    },
    {
      name: 'Delete',
      src: TrashIcon
    }
  ]

  return (
        <div className="action-icons">
            { icons.map((icon, i) => {
                return <div className="icon-container" key={i}>
                {icon.src === 'text' ? <div className="text-icon">{icon.name}</div>
                : <img src={icon.src} className="icon" alt={icon.name}/>}
                </div>
            })
            }
        </div>
    );
  }

  render() {
    return (
      <div className="content-table">
        <BootstrapTable
            data={this.state.versions}
            bordered={ false }
            tableHeaderClass="table-header"
            trClassName="table-row"
            tableBodyClass="table-body">
           <TableHeaderColumn isKey={true} dataField='version_name'>Version Name</TableHeaderColumn>
           <TableHeaderColumn dataField='status' dataFormat={ this.statusFormatter }>Status</TableHeaderColumn>
           <TableHeaderColumn dataFormat={ this.actionFormatter } headerAlign="center">Action</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Body;
