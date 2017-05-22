import React, { PropTypes } from 'react';

class VoterAdd extends React.Component {
    constructor(props) {
      super(props);
      this.state={name: '', password: ''}

      this.save = this.save.bind(this);
      this.cancel = this.cancel.bind(this);
      this.onNameChange = this.onNameChange.bind(this);
      this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    save(e) {
      this.props.onSave({name: this.state.name, password: this.state.password});
    }

    cancel(e) {
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
                <button onClick={this.save}>
                  Save
                </button>
              </div>
              <div className="col-xs-1">
                <button onClick={this.cancel}>
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
