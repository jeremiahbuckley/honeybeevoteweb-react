import React, { PropTypes } from 'react';

class CandidateVote extends React.Component {
  constructor(props) {
    super(props);
    this.state = props

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
          <label className="col-xs-1">Vote as:</label>
            <select name="voterSelect" className="col-xs-3" 
              ng-options="voter.name for voter in $ctrl.voters track by voter._id"
              ng-model="$ctrl.selectedVoter">
            </select>
          <label className="col-xs-1">Value</label>
          <input className="col-xs-2" ng-model="$ctrl.value" type="text" required />
        </div>
        <div className="row">
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

// CandidateDetail.propTypes = { title: PropTypes.string.isRequired };

export default CandidateVote;