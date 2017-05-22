import React, { PropTypes } from 'react';

class ElectionAdd extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: '', winThreshhold: 10, voteSustainDuration: 15, voterDormancyDuration: 12};

      this.onSave = this.onSave.bind(this);
      this.onCancel = this.onCancel.bind(this);
      this.onNameChange = this.onNameChange.bind(this);
      this.onWinThreshholdChange = this.onWinThreshholdChange.bind(this);
      this.onVoteSustainDurationChange = this.onVoteSustainDurationChange.bind(this);
      this.onVoterDormancyDurationChange = this.onVoterDormancyDurationChange.bind(this);
    }

    onSave(e) {
      this.props.onSave(this.state);
    }

    onCancel(e) {
      this.props.onCancel(e);
    }

    onNameChange(event) {
      this.setState({name:  event.target.value });
    }

    onWinThreshholdChange(event) {
      this.setState({winThreshhold:  event.target.value });
    }

    onVoteSustainDurationChange(event) {
      this.setState({voteSustainDuration:  event.target.value });
    }

    onVoterDormancyDurationChange(event) {
      this.setState({voterDormancyDuration:  event.target.value });
    }
    
    render() {
        return (
          <div>
            <div className="row">
              <label className="col-xs-3">Election name:</label>
              <input className="col-xs-4" value={this.state.name} onChange={this.onNameChange} type="text" required />
            </div>
            <div className="row">
              <label className="col-xs-3">Win Threshhold:</label>
              <input className="col-xs-2" value={this.state.winThreshhold} onChange={this.onWinThreshholdChange} type="number" required />
              <label className="col-xs-3">Vote Sustain Duration:</label>
              <input className="col-xs-2" value={this.state.voteSustainDuration} onChange={this.onVoteSustainDurationChange} type="number" required />
              <label className="col-xs-3">Voter Dormancy Duration:</label>
              <input className="col-xs-2" value={this.state.voterDormancyDuration} onChange={this.onVoterDormancyDurationChange} type="number" required />
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