import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CandidatesList.scss';
import CandidateDetail from '../CandidateDetail.js';
import CandidateAdd from '../CandidateAdd.js';
import fetch from 'node-fetch';
  // const candidates = [
  //   {_id: 1, key: 1, name:'Hansome Cabbie', candidateElections: [
  //     {electionId: 7, key: 7, value: 10, votes: [
  //       {key: 100, voterId: 1, value: 10, startTime: '1/1/2010', endTime: '1/1/2011', endDormancyTime: '1/1/2011', expired: false, voterIsDormant: false }, 
  //       {key: 101, voterId: 2, value: 12, startTime: '1/2/2010', endTime: '1/2/2011', endDormancyTime: '1/2/2011', expired: true, voterIsDormant: true }
  //       ]}]},
  //   {_id: 22, key: 22, name:'Verity Mirstein', candidateElections: [
  //     {electionId: 7, key: 7, value: 10, votes: [
  //       {key: 103, voterId: 1, value: 14, startTime: '1/3/2010', endTime: '1/3/2011', endDormancyTime: '1/3/2011', expired: false, voterIsDormant: true }, 
  //       {key: 104, voterId: 2, value: 16, startTime: '1/4/2010', endTime: '1/4/2011', endDormancyTime: '1/4/2011', expired: false, voterIsDormant: true }
  //       ]},
  //     {electionId: 17, key:17, value: 30, votes: [
  //       {key: 106, voterId: 1, value: 18, startTime: '1/5/2010', endTime: '1/5/2011', endDormancyTime: '1/5/2011', expired: true, voterIsDormant: false }, 
  //       {key: 107, voterId: 2, value: 20, startTime: '1/6/2010', endTime: '1/6/2011', endDormancyTime: '1/6/2011', expired: true, voterIsDormant: false }
  //       ]}]},
  //   {_id: 333, key: 333, name:'Primrose Gord', candidateElections: [
  //     {electionId: 17, key: 17, value: 30, votes: [
  //       {key: 109, voterId: 1, value: 22, startTime: '1/7/2010', endTime: '1/7/2011', endDormancyTime: '1/7/2011', expired: true, voterIsDormant: false }, 
  //       {key: 110, voterId: 2, value: 24, startTime: '1/8/2010', endTime: '1/8/2011', endDormancyTime: '1/8/2011', expired: false, voterIsDormant: true }
  //       ]}]}];

  const elections = [
    {_id: 2, key: 2, name:'King me', winThreshhold: 5, voteSustainDuration: 10, voterDormancyDuration: 12, candidateIds: [1, 22], voterIds: [10, 20, 30]},
    {_id: 3, key: 3, name:'King them', winThreshhold: 15, voteSustainDuration: 20, voterDormancyDuration: 120, candidateIds: [1, 333], voterIds: [10, 20, 30]},
    {_id: 4, key: 4, name:'No kings', winThreshhold: 25, voteSustainDuration: 30, voterDormancyDuration: 1200, candidateIds: [22], voterIds: [10, 20, 30]}
  ]

class CandidatesList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {showAddPanel: false, candidates: []};
    this.addCandidateShow = this.addCandidateShow.bind(this);
    this.addCandidateOnSave = this.addCandidateOnSave.bind(this);
    this.addCandidateOnCancel = this.addCandidateOnCancel.bind(this);
    this.addCandidateElections = this.addCandidateElections.bind(this);

    const noElectionChoice = {name: "Don't assign election", _id: "-1"};


    var local = this;

    fetch('http://localhost:8000/candidates')
        .then(function(res) {
            return res.json();
        }).then(function(json) {
            local.setState(prevState => { candidates: json})
        });
  }

  addCandidateShow(e) {
    this.setState(prevState => ({
      showAddPanel: true
    }));
  }

  addCandidateOnSave(candidateData) {
    console.log("add candidate " + JSON.stringify(candidateData));
    this.setState(prevState => ({
      showAddPanel: false
    }))
  }

  addCandidateOnCancel() {
    console.log("cancelling add candidate");
    this.setState(prevState => ({
      showAddPanel: false
    }))
  }

  addCandidateElections() {
    return !this.props.electionId;
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
        {this.state.candidates.map(cd => 
          <CandidateDetail {...{key: cd.key, candidate: cd, 
            electionId: "$ctrl.electionId", onDelete: "$ctrl.delete(_id)",
            onVoteSave: "$ctrl.saveVote(voteData)", voters: "$ctrl.voters"}}
          >
          </CandidateDetail>
        )}
        <div className="row">
          <button onClick={this.addCandidateShow}>Add Candidate</button>
        </div>
        { this.state.showAddPanel ? (
          <CandidateAdd onSave={this.addCandidateOnSave}
            onCancel={this.addCandidateOnCancel} elections={elections}
            showElectionSelect={this.addCandidateElections()}
            noElectionChoice={this.noElectionChoice}
          >
          </CandidateAdd>
          )
          :
          null 
        }
      </div>
    );
  }
}

// CandidatesList.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(CandidatesList, s);
