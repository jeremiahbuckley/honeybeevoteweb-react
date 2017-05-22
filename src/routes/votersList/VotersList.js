import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './VotersList.scss';
import VoterAdd from '../VoterAdd.js';


class VotersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showAddPanel: false, voters: [{_id: 1, key: 1, name: 'Who Me', password: '11111'}, {_id: 354, key: 354,name: 'Sally Stex', password: '22222'}]};

    this.addVoter = this.addVoter.bind(this);
    this.addVoterOnSave = this.addVoterOnSave.bind(this);
    this.addVoterOnCancel = this.addVoterOnCancel.bind(this);
    this.delete = this.delete.bind(this);
  }

  delete(id) {
    console.log("delete voter clicked : " + id);
  }

  addVoter(e) {
    this.setState(prevState => ({
      showAddPanel: true
    }));
  }

  addVoterOnSave(voterData) {
    console.log("add voter " + JSON.stringify(voterData));
    this.setState(prevState => ({
      showAddPanel: false
    }));
  }

  addVoterOnCancel() {
    console.log("cancelling add voter");
    this.setState(prevState => ({
      showAddPanel: false
    }));
  }

  render() {
    return (
      <div className="container">
          <div className="row">
              Voters
          </div>
          <div className="row">
              <div className="col-xs-3">Id</div>
              <div className="col-xs-3">Name</div>
              <div className="col-xs-2">Password</div>
          </div>
          {this.state.voters.map((voter) => 
            <div className="row" key={voter._id}>
            <div className="col-xs-3">{voter._id}</div>
                <div className="col-xs-3">{voter.name}</div>
                <div className="col-xs-2">{voter.password}</div>
                <div className="col-xs-1">
                    <button onClick={() => this.delete(voter._id)}>
                        Delete
                    </button>
                </div>
            </div>
          )}
          <div className="row">
              <button onClick={this.addVoter}>
                  Add Voter
              </button>
          </div>
          { this.state.showAddPanel ?
              <VoterAdd onSave={this.addVoterOnSave}
                onCancel={this.addVoterOnCancel}
              >
              </VoterAdd>
              : 
              null
          }
      </div>
    );    
  }
}

// VotersList.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(VotersList, s);
