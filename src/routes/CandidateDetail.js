import React, { PropTypes } from 'react';
import CandidateElection from './CandidateElection.js';

class CandidateDetail extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};

      this.delete = this.delete.bind(this);
    }

    delete(id) {
      this.props.onDelete(id);
    }

    candidateVoteOnSave(voteData) {
      console.log("trying to save date: " + voteData);
      console.log("trying to save date: " + JSON.stringify(voteData));
      this.props.onSave();
    }

    render() {
        return (
          <div>
        <div className="row">
          <div className="col-xs-3">{this.state.candidate._id}</div>
          <div className="col-xs-3">{this.state.candidate.name}</div>
        </div>
        <div className="row">
          <div className="col-xs-1">&nbsp;</div>
          <div className="col-xs-1">
            <button onClick={() => this.delete(this.props.candidate._id)}>
              Delete
            </button>
          </div>
        </div>
        {this.state.candidate.candidateElections.map(ce =>
          <CandidateElection {...{ key: ce.key, candidateElection: ce,  candidateName: this.props.candidate.name,
            electionId: this.props.electionId, voters: this.props.voters,
            onVoteSave: this.candidateVoteOnSave}}></CandidateElection>
        )}
        {/* 
        <CandidateElection ng-repeat="candidateElection in $ctrl.candidate.candidateElections | filter:{electionId:$ctrl.electionId}:$ctrl.filterByElectionId" 
        candidate-election="candidateElection" candidateName={this.props.candidate.name} 
        electionId={this.props.electionId} voters={this.props.voters} onVoteSave={this.candidateVoteOnSave}></CandidateElection>
        */}
      </div>
        );
    }
}

// CandidateDetail.propTypes = { title: PropTypes.string.isRequired };

export default CandidateDetail;