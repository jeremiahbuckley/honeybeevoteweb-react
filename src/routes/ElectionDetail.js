import React, { PropTypes } from 'react';
import ElectionSetCandidates from './ElectionSetCandidates';

class ElectionDetail extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showCandidatesListPanel: false, showCandidatesSelectPanel: false};

      this.showSetCandidates = this.showSetCandidates.bind(this);
      this.showCandidatesList = this.showCandidatesList.bind(this);
      this.deleteElection = this.deleteElection.bind(this);
      this.closeCandidatesList = this.closeCandidatesList.bind(this);
      this.candidatesSelectOnSave = this.candidatesSelectOnSave.bind(this);
      this.candidatesSelectOnCancel = this.candidatesSelectOnCancel.bind(this);
    }

    showSetCandidates() {
      this.setState({ showCandidatesSelectPanel: true });
    }

    showCandidatesList() {
      this.setState({showCandidatesListPanel: true });
    }

    deleteElection(id) {
      console.log("deleting election: " + id);
    }

    closeCandidatesList() {
      this.setState({showCandidatesListPanel: false})
    }

    candidatesSelectOnSave(candidateIdsList) {
      console.log("saving candidate selections: " + candidateIdsList);
      this.setState({showCandidatesSelectPanel: false})
    }

    candidatesSelectOnCancel() {
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
                      <button onClick={() => this.deleteElection(this.props.election._id)}>
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