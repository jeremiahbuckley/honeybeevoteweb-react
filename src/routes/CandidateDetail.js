import React, { PropTypes } from 'react';
import CandidateElection from './CandidateElection.js';

class CandidateDetail extends React.Component {
    constructor(props) {
      super(props);
      this.state = props;
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
            <button ng-click="$ctrl.delete($ctrl.candidate._id)">
              Delete
            </button>
          </div>
        </div>
        {this.state.candidate.candidateElections.map(ce =>
          <CandidateElection {...{ key: ce.key, candidateElection: ce,  candidateName: "$ctrl.candidate.name",
            electionId: "$ctrl.electionId", voters: "$ctrl.voters",
            onVoteSave: "$ctrl.candidateVoteOnSave(voteData)"}}></CandidateElection>
        )}
        {/* <CandidateElection ng-repeat="candidateElection in $ctrl.candidate.candidateElections | filter:{electionId:$ctrl.electionId}:$ctrl.filterByElectionId" candidate-election="candidateElection" candidate-name="$ctrl.candidate.name" election-id="$ctrl.electionId" voters="$ctrl.voters" on-vote-save="$ctrl.candidateVoteOnSave(voteData)"></CandidateElection> */}
      </div>
        );
    }
}

// CandidateDetail.propTypes = { title: PropTypes.string.isRequired };

export default CandidateDetail;