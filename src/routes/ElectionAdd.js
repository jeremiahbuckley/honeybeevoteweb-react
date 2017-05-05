import React, { PropTypes } from 'react';

class ElectionAdd extends React.Component {
    constructor(props) {
      super(props);
      this.state = { };

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
              <label className="col-xs-3">Election name:</label>
              <input className="col-xs-4" ng-model="$ctrl.name" type="text" required />
            </div>
            <div className="row">
              <label className="col-xs-3">Win Threshhold:</label>
              <input className="col-xs-1" ng-model="$ctrl.winThreshhold" type="number" required />
              <label className="col-xs-3">Vote Sustain Duration:</label>
              <input className="col-xs-1" ng-model="$ctrl.voteSustainDuration" type="number" required />
              <label className="col-xs-3">Voter Dormancy Duration:</label>
              <input className="col-xs-1" ng-model="$ctrl.voterDormancyDuration" type="number" required />
            </div>
            <div className="row">
              <div className="col-xs-1">
                <label>&nbsp;</label>
              </div>
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

// ElectionAdd.propTypes = { title: PropTypes.string.isRequired };

export default ElectionAdd;