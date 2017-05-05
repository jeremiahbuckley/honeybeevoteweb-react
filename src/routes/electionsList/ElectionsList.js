import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ElectionsList.scss';

import ElectionDetail from '../ElectionDetail.js';
import ElectionAdd from '../ElectionAdd.js';

  const elections = [
    {_id: 2, key: 2, name:'King me', winThreshhold: 5, voteSustainDuration: 10, voterDormancyDuration: 12, candidateIds: [1, 2, 3], voterIds: [10, 20, 30]},
    {_id: 3, key: 3, name:'King them', winThreshhold: 15, voteSustainDuration: 20, voterDormancyDuration: 120, candidateIds: [1, 2, 3], voterIds: [10, 20, 30]},
    {_id: 4, key: 4, name:'No kings', winThreshhold: 25, voteSustainDuration: 30, voterDormancyDuration: 1200, candidateIds: [1, 2, 3], voterIds: [10, 20, 30]}
  ]

class ElectionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showAddPanel: false }

    this.addElection = this.addElection.bind(this);
  }

  addElection(e) {
    this.setState(prevState => ({
      showAddPanel: !prevState.showAddPanel
    }));
  }

  addElectionOnSave(electionData) {
    console.log("add election " + electionData);
  }

  addElectionOnCancel() {
    console.log("cancelling add election");
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
            candidates: "$ctrl.candidates", onDelete: "$ctrl.delete(_id)",
            onCandidatesSelectSave: "$ctrl.saveCandidatesSelection(candidateIdsList)" }}
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
