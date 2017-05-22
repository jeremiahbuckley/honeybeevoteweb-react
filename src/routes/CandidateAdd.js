import React, { PropTypes } from 'react';

class CandidateAdd extends React.Component {
    constructor(props) {
      super(props);
      console.log(JSON.stringify(props));

      this.state = { name: '', selectedElection: '' } // jbdontforget - selectedElection might be expected to be an object...confirm

      this.save = this.save.bind(this);
      this.cancel = this.cancel.bind(this);
      this.onNameChange = this.onNameChange.bind(this);
      this.onElectionSelectionChanged = this.onElectionSelectionChanged.bind(this);
    }

    save() {
      this.props.onSave(this.state);
    }

    cancel() {
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
                        return <option key={el._id} value={el._id}>{el.name}</option>
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

// CandidateAdd.propTypes = { title: PropTypes.string.isRequired };

export default CandidateAdd;