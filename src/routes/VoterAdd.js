import React, { PropTypes } from 'react';

class VoterAdd extends React.Component {
    constructor(props) {
      super(props);
      this.state={name: '', password: ''}

      this.onSave = this.onSave.bind(this);
      this.onCancel = this.onCancel.bind(this);
      this.onNameChange = this.onNameChange.bind(this);
      this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    onSave(e) {
      this.props.onSave({name: this.state.name, password: this.state.password});
    }

    onCancel(e) {
      this.props.onCancel();
    }

    onNameChange(event) {
      this.setState({name:  event.target.value });
    }

    onPasswordChange(event) {
      this.setState({password: event.target.value });
    }

    render() {
        return (
          <div>
            <div className="row">
              <label className="col-xs-2">Name:</label>
              <input className="col-xs-4" value={this.state.name} onChange={this.onNameChange} type="text" required />
            </div>
            <div className="row">
              <label className="col-xs-2">Password:</label>
              <input className="col-xs-4" value={this.state.password} onChange={this.onPasswordChange} type="text" required />
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
