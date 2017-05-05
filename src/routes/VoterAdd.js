import React, { PropTypes } from 'react';

class VoterAdd extends React.Component {
    constructor(props) {
      super(props);
      console.log("start");
      console.log(props);

      this.onSave = this.onSave.bind(this);
      this.onCancel = this.onCancel.bind(this);
    }

    onSave(e) {
      this.props.onSave(e);
    }

    onCancel(e) {
      this.props.onCancel();
    }

    render() {
        return (
          <div>
            <div className="row">
              <label className="col-xs-2">Name:</label>
              <input className="col-xs-4" ng-model="$ctrl.name" type="text" required />
            </div>
            <div className="row">
              <label className="col-xs-2">Password:</label>
              <input className="col-xs-4" ng-model="$ctrl.password" type="text" required />
            </div>
            <div className="row">
              <div className="col-xs-1">
                &nbsp;  
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

// VoterAdd.propTypes = { title: PropTypes.string.isRequired };

export default VoterAdd;
