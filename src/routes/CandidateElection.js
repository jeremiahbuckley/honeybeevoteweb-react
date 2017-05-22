import React, { PropTypes } from 'react';
import CandidateVote from './CandidateVote.js';
import CandidateVotesList from './CandidateVotesList.js';

class CandidateElection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showVotePanel: false }

    this.showVote = this.showVote.bind(this);
    this.candidateVoteOnSave = this.candidateVoteOnSave.bind(this);
    this.candidateVoteOnCancel = this.candidateVoteOnCancel.bind(this);
  }

  showVote() {
    this.setState({ showVotePanel: true });
  }

  candidateVoteOnCancel() {
    console.log("cancelling add candidateVote");
    this.setState({showVotePanel: false})
  }

  candidateVoteOnSave(candidateVoteData) {
    console.log("add candidateVote " + JSON.stringify(candidateVoteData));
    this.props.onVoteSave(candidateVoteData);
    this.setState({showVotePanel: false});
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
                      <CandidateVote onSave={this.candidateVoteOnSave} onCancel={this.candidateVoteOnCancel} voters={this.props.voters}>
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