import React, { PropTypes } from 'react';

class CandidateAdd extends React.Component {
    constructor(props) {
      super(props);
      console.log(JSON.stringify(props));

      this.state = { name: '', selectedElection: null }

      this.onSave = this.onSave.bind(this);
      this.onCancel = this.onCancel.bind(this);
      this.onNameChange = this.onNameChange.bind(this);
      this.onElectionSelectionChanged = this.onElectionSelectionChanged.bind(this);
    }

    onSave() {
      this.props.onSave(this.state);
    }

    onCancel() {
      this.props.onCancel();
    }

    onNameChange(event) {
      this.setState({name: event.target.value });
    }

    onElectionSelectionChanged(event) {
      this.setState({selectedElection: event.target.value})
    }
    
    render() {
        return (
          <div>
            <div className="row">
              { this.props.showElectionSelect ?
                <div>
                  <label className="col-xs-1">In:</label>
                    <select value={this.state.selectedElection} onChange={this.onElectionSelectionChanged} name="electionSelect" className="col-xs-3" >
                      { this.props.elections.map( el => {
                        return <option value={el._id}>{el.name}</option>
                      })}
                    </select>
                </div>
                :
                null
              }
              <label className="col-xs-3">Candidate name:</label>
              <input className="col-xs-4" value={this.state.name} onChange={this.onNameChange} type="text" required />
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