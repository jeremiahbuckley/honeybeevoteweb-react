import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CandidatesList.scss';
import CandidateDetail from '../CandidateDetail.js';
import CandidateAdd from '../CandidateAdd.js';

  const candidates = [
    {_id: 1, key: 1, name:'Hansome Cabbie', candidateElections: [
      {electionId: 7, key: 7, value: 10, votes: [
        {key: 100, voterId: 1, value: 10, startTime: '1/1/2010', endTime: '1/1/2011', endDormancyTime: '1/1/2011', expired: false, voterIsDormant: false }, 
        {key: 101, voterId: 2, value: 12, startTime: '1/2/2010', endTime: '1/2/2011', endDormancyTime: '1/2/2011', expired: true, voterIsDormant: true }
        ]}]},
    {_id: 22, key: 22, name:'Verity Mirstein', candidateElections: [
      {electionId: 7, key: 7, value: 10, votes: [
        {key: 103, voterId: 1, value: 14, startTime: '1/3/2010', endTime: '1/3/2011', endDormancyTime: '1/3/2011', expired: false, voterIsDormant: true }, 
        {key: 104, voterId: 2, value: 16, startTime: '1/4/2010', endTime: '1/4/2011', endDormancyTime: '1/4/2011', expired: false, voterIsDormant: true }
        ]},
      {electionId: 17, key:17, value: 30, votes: [
        {key: 106, voterId: 1, value: 18, startTime: '1/5/2010', endTime: '1/5/2011', endDormancyTime: '1/5/2011', expired: true, voterIsDormant: false }, 
        {key: 107, voterId: 2, value: 20, startTime: '1/6/2010', endTime: '1/6/2011', endDormancyTime: '1/6/2011', expired: true, voterIsDormant: false }
        ]}]},
    {_id: 333, key: 333, name:'Primrose Gord', candidateElections: [
      {electionId: 17, key: 17, value: 30, votes: [
        {key: 109, voterId: 1, value: 22, startTime: '1/7/2010', endTime: '1/7/2011', endDormancyTime: '1/7/2011', expired: true, voterIsDormant: false }, 
        {key: 110, voterId: 2, value: 24, startTime: '1/8/2010', endTime: '1/8/2011', endDormancyTime: '1/8/2011', expired: false, voterIsDormant: true }
        ]}]}];

class CandidatesList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {showAddPanel: false};
    this.addCandidateShow = this.addCandidateShow.bind(this);
  }

  addCandidateShow(e) {
    this.setState(prevState => ({
      showAddPanel: !prevState.showAddPanel
    }));
  }

  addCandidateOnSave(candidateData) {
    console.log("add candidate " + candidateData);
  }

  addCandidateOnCancel() {
    console.log("cancelling add candidate");
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          Candidates
        </div>
        <div className="row">
          <div className="col-xs-3">Id</div>
          <div className="col-xs-3">Name</div>
        </div>
        {candidates.map(cd => 
          <CandidateDetail {...{key: cd.key, candidate: cd, 
            electionId: "$ctrl.electionId", onDelete: "$ctrl.delete(_id)",
            onVoteSave: "$ctrl.saveVote(voteData)", voters: "$ctrl.voters"}}
          >
          </CandidateDetail>
        )}
        <div className="row">
          <button onClick={this.addCandidateShow}>Add Candidate</button>
        </div>
        { this.state.showAddPanel ?
          <CandidateAdd onSave={this.addCandidateOnSave}
            onCancel={this.addCandidateOnCancel} elections="$ctrl.elections"
            show-election-select="$ctrl.addCandidateElections()"
            no-election-choice="$ctrl.noElectionChoice"
          >
          </CandidateAdd>
          :
          null 
        }
      </div>
    );
  }
}

// CandidatesList.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(CandidatesList, s);
