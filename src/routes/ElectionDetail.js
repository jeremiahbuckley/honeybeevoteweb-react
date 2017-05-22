import React, { PropTypes } from 'react';
import ElectionSetCandidates from './ElectionSetCandidates';

class ElectionDetail extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showCandidatesListPanel: false, showCandidatesSelectPanel: false};

      this.showSetCandidates = this.showSetCandidates.bind(this);
      this.showCandidatesList = this.showCandidatesList.bind(this);
      this.delete = this.delete.bind(this);
      this.closeCandidatesList = this.closeCandidatesList.bind(this);
      this.candidatesSelectOnSave = this.candidatesSelectOnSave.bind(this);
      this.candidatesSelectOnCancel = this.candidatesSelectOnCancel.bind(this);
    }

    delete(id) {
      console.log("deleting election: " + id);
      this.props.onDelete(id);
    }

    showSetCandidates() {
      this.setState({ showCandidatesSelectPanel: true });
    }

    showCandidatesList() {
      this.setState({showCandidatesListPanel: true });
    }

    candidatesSelectOnCancel() {
      this.setState({showCandidatesSelectPanel: false})
    }
    
    closeCandidatesList() {
      this.setState({showCandidatesListPanel: false})
    }

    candidatesSelectOnSave(cIdsList) {
      console.log("saving candidate selections: " + JSON.stringify(cIdsList));
      this.props.onCandidatesSelectSave({id: this.props.election._id, list: cIdsList})
      this.setState({showCandidatesSelectPanel: false})
    }

    render() {
        return (
            <div>
              <div className="row">
                  <div className="col-xs-3">{this.props.election._id}</div>
                  <div className="col-xs-2">{this.props.election.name}</div>
                  <div className="col-xs-2">{this.props.election.winThreshhold}</div>
                  <div className="col-xs-2">{this.props.election.voteSustainDuration}</div>
                  <div className="col-xs-2">{this.props.election.voterDormancyDuration}</div>
              </div>
              <div className="row">
                  <div className="col-xs-3">
                      <button onClick={this.showSetCandidates}>
                          Set Candidates
                      </button>
                  </div>
                  <div className="col-xs-3">
                      <button onClick={this.showCandidatesList}>
                          Candidate Details
                      </button>
                  </div>
                  <div className="col-xs-1">
                      <button onClick={() => this.delete(this.props.election._id)}>
                          Delete
                      </button>
                  </div>
              </div>
              <div className="row">
                  <div className="col-xs-1">
                      <label>&nbsp;</label>
                  </div>
                  <div className="col-xs-1">
                      <label>Candidates: </label>
                  </div>
                  <div className="col-xs-10">
                      <div className="col-xs-2">{this.props.election.candidateIds}</div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-xs-1">
                      <label>&nbsp;</label>
                  </div>
                  <div className="col-xs-1">
                      <label>Voters: </label>
                  </div>
                  <div className="col-xs-110">
                      <div className="col-xs-2">{this.props.election.voterIds}</div>
                  </div>
              </div>
              { this.state.showCandidatesListPanel ?
                  <div className="row" >
                      <div className="col-xs-1">&nbsp;</div>
                      <div className="col-xs-11">
                          <candidates-list candidates-in-election={this.props.election.candidateIds} election-id={this.props.election._id}></candidates-list>
                          <div className="row">
                              <div className="col-xs-4">
                                  <button onClick={this.closeCandidatesList}>
                                      Close Candidate Details
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
                :
                null
              }
              { this.state.showCandidatesSelectPanel ?
                  <ElectionSetCandidates onSave={this.candidatesSelectOnSave} candidateIds={this.props.election.candidateIds} candidates={this.props.candidates} onCancel={this.candidatesSelectOnCancel}></ElectionSetCandidates> 
                :
                null
              }
            </div>
        );
    }
}


// ElectionDetail.propTypes = { title: PropTypes.string.isRequired };

export default ElectionDetail;