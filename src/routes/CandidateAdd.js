import React, { PropTypes } from 'react';

class CandidateAdd extends React.Component {
    constructor(props) {
      super(props);
      this.state = props;

      this.onSave = this.onSave.bind(this);
      this.onCancel = this.onCancel.bind(this);
    }

    onSave(e) {
      this.props.onSave(e);
    }

    onCancel(e) {
      this.props.onCancel(e);
    }
    
    render() {
        return (
          <div>
            <div className="row">
              <div ng-show="$ctrl.showElectionSelect">
                <label className="col-xs-1">In:</label>
                  <select name="electionSelect" className="col-xs-3" 
                    ng-options="election.name for election in $ctrl.elections track by election._id"
                    ng-model="$ctrl.selectedElection">
                  </select>     
              </div>
              <label className="col-xs-3">Candidate name:</label>
              <input className="col-xs-4" ng-model="$ctrl.name" type="text" required />
            </div>
            <div className="row">
              <div className="col-xs-1">&nbsp;</div>
              <div className="col-xs-1">
                <button onClick={this.onSave}>
                  Save
                </button>
              </div>
              <div className="col-xs-1">
                <button onClick={this.onCancel}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        );
    }
}

// CandidateAdd.propTypes = { title: PropTypes.string.isRequired };

export default CandidateAdd;