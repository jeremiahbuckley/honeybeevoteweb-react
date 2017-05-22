import React, { PropTypes } from 'react';

class ElectionSetCandidates extends React.Component {
    constructor(props) {
      super(props);

      var localCandidates = [];
      props.candidates.map(candidate => {
        var lc = {_id: candidate._id, selected: false, name: candidate.name};
        props.candidateIds.map(id => {
          if (id === candidate._id) {
            lc.selected = true;
          }
        })
        localCandidates.push(lc)
      });

      this.state = {localCandidates: localCandidates }

      this.save = this.save.bind(this);
      this.cancel = this.cancel.bind(this);
      this.onCandidateSelectChange = this.onCandidateSelectChange.bind(this);
    }

    save(e) {
      this.props.onSave(e);
    }

    cancel(e) {
      this.props.onCancel(e);
    }

    onCandidateSelectChange() {
      var id = e.target.name;
      this.setState(prevState => {
        var lcs = prevState.localCandidates.map(lc => {
            return {
                _id: lc._id,
                name: lc.name,
                selected: (lc._id === id ? !lc.selected : lc.selected)
            };
        });

        return { localCandidates: lcs }
      });
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
                  name={candidate._id}
                  checked={candidate.selected}
                  onChange={this.onCandidateSelectChange}>
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

// ElectionSetCandidates.propTypes = { title: PropTypes.string.isRequired };

export default ElectionSetCandidates;
