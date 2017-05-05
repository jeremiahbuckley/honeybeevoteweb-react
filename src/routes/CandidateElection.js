import React, { PropTypes } from 'react';
import CandidateVote from './CandidateVote.js';
import CandidateVotesList from './CandidateVotesList.js';

class CandidateElection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showVotePanel: false }

    this.showVote = this.showVote.bind(this);
  }

  showVote(e) {
    console.log("here")
    this.setState(prevState => ({
      showVotePanel: !prevState.showVotePanel
    }));
  }

  candidateVoteOnSave(candidateVoteData) {
    console.log("add candidateVote " + candidateVoteData);
  }

  candidateVoteOnCancel() {
    console.log("cancelling add candidateVote");
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-1">&nbsp;</div>
          <div className="col-xs-1">Value</div>
          <div className="col-xs-1">{this.props.candidateElection.value}</div>
        </div>
        <div className="row">
          <div className="col-xs-1">&nbsp;</div>
          <div className="col-xs-11">
            <div className="row">
              <div className="col-xs-7">Votes for {this.props.candidateName} in {this.props.candidateElection.electionId}:</div>
              <div className="col-xs-1">
                <button onClick={this.showVote}>
                  Vote
                </button>
              </div>      
            </div>
              { this.state.showVotePanel ?
                  <div className="row">
                    <div className="col-xs-12" >
                      <CandidateVote onSave={this.candidateVoteOnSave} onCancel={this.candidateVoteOnCancel} voters="$ctrl.voters">
                      </CandidateVote>
                    </div>
                  </div>
                :
                null
              }
            {this.props.candidateElection.votes.map(vt =>
              <CandidateVotesList {...{key: vt.key, vote:vt}}></CandidateVotesList>
            )}
          </div>
        </div>
      </div>
    );
  }
}

// CandidateDetail.propTypes = { title: PropTypes.string.isRequired };

export default CandidateElection;