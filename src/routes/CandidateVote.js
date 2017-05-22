import React, { PropTypes } from 'react';

class CandidateVote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedVoter: '', value:''}

    this.onSave = this.onSave.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onValueChanged = this.onValueChanged.bind(this);
    this.onSelectedVoterChanged = this.onSelectedVoterChanged.bind(this);
  }

  onSave() {
    this.props.onSave(this.state);
  }

  onCancel() {
    this.props.onCancel();
  }

  onValueChanged(event) {
    this.setState({value: event.target.value})
  }

  onSelectedVoterChanged(event) {
    this.setState({selectedVoter: event.target.value })
  }

  render() {
    return (
      <div>
        <div className="row">
          <label className="col-xs-1">Vote as:</label>
            <select name="voterSelect" className="col-xs-3" value={this.state.selectedVoter} onChange={this.onSelectedVoterChanged} >
              { this.props.voters.map( vtr => {
                return <option value={vtr._id}>{vtr.name}</option>
              })}
            </select>
          <label className="col-xs-1">Value</label>
          <input className="col-xs-2" value={this.state.value} onChange={this.onValueChanged} type="text" required />
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