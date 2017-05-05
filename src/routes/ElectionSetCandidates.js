import React, { PropTypes } from 'react';

class ElectionSetCandidates extends React.Component {
    constructor(props) {
      super(props);
      this.state = { localCandidates: [{_id: 35, selected: true, name: 'Wesley Willenhammer'}, {_id: 55, selected: false, name: 'Llewellyn Lorde'}]};

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
              <div className="col-xs-1">
                <label>&nbsp;</label>
              </div>
              <label className="col-xs-3">Select Candidates</label>
            </div>

            {this.state.localCandidates.map(candidate =>
              <div className="row" key={candidate._id}>
                <div className="col-xs-2">
                <label>&nbsp;</label>
                </div>
                  <div className="col-xs-4">
                <input
                  type="checkbox"
                  value="candidate._id"
                  ng-model="candidate.selected">
                </input>
                {candidate.name}
                </div>
              </div>
            )}
            <div className="row">
              <div className="col-xs-1">
                <label>&nbsp;</label>
              </div>
              <div className="col-xs-1">
                <button ng-click="$ctrl.save()">
                  Save
                </button>
              </div>
              <div className="col-xs-1">
                <button ng-click="$ctrl.cancel()">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        );
    }
}

// ElectionSetCandidates.propTypes = { title: PropTypes.string.isRequired };

export default ElectionSetCandidates;
