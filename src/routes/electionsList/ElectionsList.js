import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ElectionsList.scss';

import ElectionDetail from '../ElectionDetail.js';
import ElectionAdd from '../ElectionAdd.js';

  const elections = [
    {_id: 2, key: 2, name:'King me', winThreshhold: 5, voteSustainDuration: 10, voterDormancyDuration: 12, candidateIds: [1, 22], voterIds: [10, 20, 30]},
    {_id: 3, key: 3, name:'King them', winThreshhold: 15, voteSustainDuration: 20, voterDormancyDuration: 120, candidateIds: [1, 333], voterIds: [10, 20, 30]},
    {_id: 4, key: 4, name:'No kings', winThreshhold: 25, voteSustainDuration: 30, voterDormancyDuration: 1200, candidateIds: [22], voterIds: [10, 20, 30]}
  ]

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

class ElectionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showAddPanel: false }

    this.addElection = this.addElection.bind(this);
    this.addElectionOnSave = this.addElectionOnSave.bind(this);
    this.addElectionOnCancel = this.addElectionOnCancel.bind(this);
    this.delete = this.delete.bind(this);
    this.saveCandidatesSelection = this.saveCandidatesSelection.bind(this);
  }

  addElection(e) {
    this.setState({ showAddPanel: true });
  }

  addElectionOnSave(electionData) {
    console.log("add election " + electionData);
    console.log("add election " + JSON.stringify(electionData));
    this.setState({ showAddPanel: false });
  }

  addElectionOnCancel() {
    console.log("cancelling add election");
    this.setState({ showAddPanel: false });
  }

  delete(id) {
    // call *should* be this.delete(id)
    console.log("deleting election");
  }

  saveCandidatesSelection(candidateIdsList) {
    console.log("saving candidates selection: " + candidateIdsList);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          Elections
        </div>
        <div className="row">
          <div className="col-xs-3">Id</div>
          <div className="col-xs-2">Name</div>
          <div className="col-xs-2">Win Threshhold</div>
          <div className="col-xs-2">Vote Sustain Duration</div>
          <div className="col-xs-2">Voter Dormancy Duration</div>
        </div>
        {elections.map(el =>
          <ElectionDetail {...{ key: el.key, election: el,
            candidates, onDelete: this.delete,
            onCandidatesSelectSave: this.saveCandidatesSelection }}
          >
          </ElectionDetail>
        )}
        <div className="row">
          <button onClick={this.addElection}>
            Add Election
          </button>
        </div>
        { this.state.showAddPanel ?
          <ElectionAdd onSave={this.addElectionOnSave}
            onCancel={this.addElectionOnCancel}
          >
          </ElectionAdd>
          :
          null
        }
      </div>
    );
  }
}

// ElectionsList.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(ElectionsList, s);
