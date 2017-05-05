import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './VotersList.scss';
import VoterAdd from '../VoterAdd.js';


class VotersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { voters: [{_id: 1, key: 1, name: 'Who Me', password: '11111'}, {_id: 354, key: 354,name: 'Sally Stex', password: '22222'}]};
  }

  addVoterOnSave(voterData) {
    console.log("add voter " + voterData);
  }

  addVoterOnCancel() {
    console.log("cancelling add voter");
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
            <div className="row">
            <div className="col-xs-3">{voter._id}</div>
                <div className="col-xs-3">{voter.name}</div>
                <div className="col-xs-2">{voter.password}</div>
                <div className="col-xs-1">
                    <button ng-click="$ctrl.delete(voter._id)">
                        Delete
                    </button>
                </div>
            </div>
          )}
          <div className="row">
              <button ng-click="$ctrl.addVoter()">
                  Add Voter
              </button>
          </div>
          <div ng-show="$ctrl.showAddPanel">
              <VoterAdd onSave={this.addVoterOnSave}
                onCancel={this.addVoterOnCancel}
              >
              </VoterAdd>
          </div>
      </div>
    );    
  }
}

// VotersList.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(VotersList, s);
